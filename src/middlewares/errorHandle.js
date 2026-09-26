const isProduction = require("@/utils/isProduction");
const {
  PrismaClientValidationError,
} = require("@prisma/client/runtime/client");
const { prismaCodes, httpCodes } = require("@/config/constants");

function errorHanadle(error, req, res, next) {
  if (isProduction()) {
    return res.error("Server error.", 500);
  }
  if (error instanceof PrismaClientValidationError) {
    return res.error(
      {
        info: error,
        message: String(error),
      },
      500,
    );
  }

  if (error?.code === prismaCodes.duplacate) {
    return res.error(
      {
        message: "Duplicate entry",
      },
      httpCodes.conflict,
    );
  }

  res.error(error ?? "Server error", 500);
}

module.exports = errorHanadle;
