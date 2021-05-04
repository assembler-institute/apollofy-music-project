const { geo } = require("../services");

module.exports.geoMiddleware = async (req, res, next) => {
  const ip = req.connection.remoteAddress;

  if (!req.body.lat && !req.body.long) {
    const geoResponse = geo.getIpCoordinates(ip);

    if (geoResponse && geoResponse.ll.length > 0) {
      req.body.lat = geoResponse.ll[0];
      req.body.long = geoResponse.ll[1];
    }
  }

  next();
};
