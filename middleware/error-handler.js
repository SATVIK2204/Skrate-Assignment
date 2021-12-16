const { StatusCodes } = require('http-status-codes');

// Error Handler to Handle all the errors which are not handled seperately in the application.


const errorHandlerMiddleware = (err, req, res, next) => {
  
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  };

  console.log(err);   //Uncomment to print the error

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
