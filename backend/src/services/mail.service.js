require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.faketi.xyz",
  port: 465,
  auth: {
    user: "test@faketi.xyz",
    // pass: process.env.SMTP_SECRET,
    pass: "Sg?#nIEG)U{o",
  },
});

const sendMail = (to, details) => {
  return transporter.sendMail({
    ...details,
    from: "'Eshikha' test@faketi.xyz",
    to,
  });
};

module.exports = {
  sendMail,
};
