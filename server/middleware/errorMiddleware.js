const notFound = (req, res, next) => {
  console.log("rrrrrrrrrrrrrrrrrrrr");
  const error = new Error(`not Found- ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  console.log("gggg" + res.statusCode);
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next();
};

module.exports = { notFound, errorHandler };
