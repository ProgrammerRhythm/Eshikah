const error = require("../error");
const userService = require("../services/user.service");
const authService = require("../services/auth.service");
const mailService = require("../services/mail.service");
const generateTemplate = require("../utils/mailTemplate");
const loginController = async (req, res, next) => {
  try {
    const { email } = req.body;
    // extract and validate email
    if (!email) error("Please provide a email address", 400);

    // search if user with same email exits
    const user = await userService.findUser("email", email);

    if (!user) {
      // create a token for new user signup
      const firstLoginToken = authService.generateFirstTimeLogin(email);

      const generatedTemple = generateTemplate({
        link: `${process.env.WEBSITE_URL}/signup?token=${firstLoginToken}`,
        buttonText: "Create account",
        title: "Create a new Account",
        validFor: "3",
      });
      // mail signup url to user
      await mailService.sendMail(email, {
        subject: "signup to eshikha",
        html: generatedTemple,
      });
      return res.status(200).json({
        success: true,
        message: "New user detected, Please check you email",
      });
    }
    // if user exits with that email extract user information
    const { firstName, lastName, role, status, id } = user;
    // generate login token with that information
    const loginToken = authService.generateLoginToken(user.email, {
      firstName,
      lastName,
      role,
      status,
      id,
    });

    const generatedTemple = generateTemplate({
      link: `${process.env.WEBSITE_URL}/signin?token=${loginToken}`,
      buttonText: "login",
      title: "Detected new Login request",
      validFor: "7",
    });
    // mail login token to user
    await mailService.sendMail(email, {
      subject: "Login to account",
      html: generatedTemple,
    });

    return res.status(200).json({
      success: true,
      message: "please check your email",
    });
  } catch (error) {
    next(error);
  }
};

const registerController = async (req, res, next) => {
  try {
    // extract and validate provided information
    const { firstName, lastName, dateOfBirth, token } = req.body;
    if (!firstName || !lastName || !dateOfBirth || !token)
      error("firstName, lastName, dateOfBirth, token is required", 400);

    // check if the token is for registration and extract email from token
    const { isValid, email } = authService.verifySignupToken(token);
    if (!isValid) error("Invalid signup token provided", 400);
    // check if user exists with that mail
    let user = await userService.findUser("email", email);
    if (user)
      error(
        "You have already registered using that token, please try to login",
        400
      );

    // create a new user
    user = await userService.createUser(email, {
      firstName,
      lastName,
      dateOfBirth,
      status: "active",
    });

    // generate login token with that information
    const loginToken = authService.generateLoginToken(user.email, {
      firstName,
      lastName,
      role,
      status: user.status,
      id,
      dateOfBirth,
    });
    res.status(200).json({
      success: true,
      message: "Account Created Successfully",
      token: loginToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
