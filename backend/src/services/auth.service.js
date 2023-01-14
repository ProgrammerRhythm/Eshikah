const jwt = require("jsonwebtoken");

const generateToken = (payload, expiresIn) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return false;
  }
};
const generateLoginToken = async (email, information, expiresIn = "7 days") => {
  const tokenCreatedAt = new Date().getTime();
  const token = generateLoginToken(
    { ...information, tokenCreatedAt, email },
    expiresIn
  );
  return token;
};

const generateFirstTimeLogin = (email) => {
  return generateToken({ email, newUser: true }, "3 days");
};
const verifyLoginToken = async (token) => {
  try {
    const decoded = verifyToken(token);
    if (!decoded.email) return false;
    // const user = await findUser("email", decoded.email);
    // if (!user) return false;

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateFirstTimeLogin,
  verifyLoginToken,
  generateLoginToken,
};
