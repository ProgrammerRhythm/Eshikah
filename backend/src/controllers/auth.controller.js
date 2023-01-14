const error = require("../error");
const userService = require("../services/user.service");
const authService = require("../services/auth.service");
const mailService = require("../services/mail.service");
const generateTemplate = require("../utils/mailTemplate");
const loginController = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) error("Please provide a email address", 400);

    const user = await userService.findUser("email", email);

    if (!user) {
      const firstLoginToken = authService.generateFirstTimeLogin(email);

      const generatedTemple = generateTemplate({
        link: `https://127.0.0.1:40001:/auth/signup?token=${firstLoginToken}`,
        buttonText: "Create account",
        title: "Create a new Account",
        validFor: "3",
      });

      await mailService.sendMail(email, {
        subject: "signup to eshika",
        html: generatedTemple,
      });
      return res.status(200).json({
        success: true,
        message: "New user detected, Please check you email",
      });
    }

    const { firstName, lastName, role, status, id } = user;
    const loginToken = authService.generateLoginToken(user.email, {
      firstName,
      lastName,
      role,
      status,
      id,
    });

    const generatedTemple = generateTemplate({
      link: `https://127.0.0.1:40001:/auth/login?token=${loginToken}`,
      buttonText: "login",
      title: "Detected new Login request",
      validFor: "7",
    });

    await mailService.sendMail(email, {
      subject: "Login to account",
      html: generatedTemple,
    });
    return res.status(200).json({
      success: true,
      message: "please check you email",
    });
  } catch (error) {
    next(error);
  }
};

const registerController = (req, res, next) => {
  const {} = req.body;
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
