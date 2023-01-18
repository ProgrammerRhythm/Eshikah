module.exports = (message, status = 500) => {
  const e = new Error(message);
  e.status = status;

  throw e;
};
