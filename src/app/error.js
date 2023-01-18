const notFoundHandler = (_req, _res, next) => {
  const error = new Error("Resource Not Found.");
  error.status = 404;
  next(error);
};

const errorHandler = (error, _req, res, _next) => {
  if (error.status === 500 || !error.status) {
    // server error
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong.",
    });
  }

  return res.status(error.status).json({
    success: false,
    error: error.message,
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
