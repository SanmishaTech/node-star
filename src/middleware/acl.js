const createError = require('http-errors');
const permissions = require('../config/permissions');

module.exports = (permission) => async (req, res, next) => {
  if (!req.user || !req.user.role) {
    return next(createError(403, 'User role not found'));
  }

  const userRole = req.user.role;

  if (permissions[permission] && permissions[permission].includes(userRole)) {
    return next();
  }

  console.log(permission);
  return next(createError(403, 'Insufficient permissions'));
};