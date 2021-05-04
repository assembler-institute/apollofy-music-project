const { authMiddleware } = require("./auth-middleware");
const { errorMiddleware } = require("./error-middleware");
const { geoMiddleware } = require("./geo-middleware");

module.exports = {
  authMiddleware: authMiddleware,
  errorMiddleware: errorMiddleware,
  geoMiddleware: geoMiddleware,
};
