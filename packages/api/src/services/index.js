const auth = require("./auth");
const logger = require("./logger");
const geo = require("./geolocation");

module.exports = {
  auth: auth,
  geo: geo,
  logger: logger,
};
