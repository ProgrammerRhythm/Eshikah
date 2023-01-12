const notFoundHandler = (_req, _res, next) => {
  const error = new Error("Resource Not Found.");
  error.status = 404;
  next(error);
};

const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({
      success: false,
      error: error.message,
    });
  }
  res.status(500).json({
    success: false,
    error: "Something went wrong.",
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
