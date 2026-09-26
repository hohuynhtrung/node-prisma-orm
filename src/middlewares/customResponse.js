const { httpCodes } = require("@/config/constants");

function customResponse(req, res, next) {
  res.success = (data, status = httpCodes.ok) => {
    res.status(status).json({
      data,
    });
  };

  res.error = (error, status = httpCodes.internalServerError) => {
    res.status(status).json({
      error: error,
    });
  };

  next();
}

module.exports = customResponse;
