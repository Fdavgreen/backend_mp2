const ErrorResponse = require('../utils/errorResponse');

exports.someControllerFunction = async (req, res, next) => {
  try {
    // Your logic here
  } catch (error) {
    // Create a new instance of ErrorResponse and pass it to the next middleware
    return next(new ErrorResponse('Something went wrong', 500));
  }
};