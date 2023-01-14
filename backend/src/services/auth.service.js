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
const generateLoginToken = (email, information, expiresIn = "7 days") => {
  const tokenCreatedAt = new Date().getTime();
  const token = generateToken(
    { ...information, tokenCreatedAt, email },
    expiresIn
  );
  return token;
};

const generateFirstTimeLogin = (email) => {
  return generateToken({ email, newUser: true }, "3 days");
};
const verifyLoginToken = (token) => {
  let isValid = false,
    decoded = {};
  try {
    decoded = verifyToken(token);
    if (!decoded.email) {
      isValid = false;
    }

    isValid = true;
  } catch (error) {
    isValid = false;
  } finally {
    return {
      ...decoded,
      isValid,
    };
  }
};

const verifySignupToken = (token) => {
  const decoded = verifyLoginToken(token);
  if (!decoded.newUser) return { ...decoded, isValid: false };
  return { ...decoded };
};

module.exports = {
  generateFirstTimeLogin,
  verifyLoginToken,
  generateLoginToken,
  verifySignupToken,
};
