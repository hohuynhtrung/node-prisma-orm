function errorHanadle(error, req, res, next) {
  res.error("Server error", 500);
}

module.exports = errorHanadle;
