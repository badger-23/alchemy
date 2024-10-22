const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    // take the session cookie off the request
    const { session } = req.cookies;

    // check session cookie is signed and valid
    const payload = jwt.verify(session, process.env.APP_SECRET);

    // attach user to the request
    req.user = payload;
    next();
  } catch (error) {
    // if not signed, send an error to the user
    error.status = 401;
    error.message = 'You must be logged in to continue';
    next(error);
  }
};
