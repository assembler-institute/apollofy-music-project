const geoip = require("geoip-lite");

module.exports.getIpCoordinates = (ip) => {
  return geoip.lookup(ip);
};
