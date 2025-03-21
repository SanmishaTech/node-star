const createError = require('http-errors');
const Joi = require('joi'); // Import Joi

const errorHandler = (err, req, res, next) => {
  if (err instanceof createError.HttpError) {
    res.status(err.status).json({
      message: err.message,
    });
  } else if (err instanceof Joi.ValidationError) {
    res.status(400).json({
      message: err.message,
    });
  } else {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

module.exports = { errorHandler };