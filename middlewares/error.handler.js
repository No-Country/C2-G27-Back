function boomErrorHandler(error, req, res, next){
    if(error.isBoom){
      const { output } = error;
      res.status(output.statusCode).json(output.payload)
    }
    next(error);
  }
  
  function sequelizeErrorHandler(error, req, res){
    res.status(error.status || 500).json({
      status: 'error',
      error: {message: error.message},
    })
  }
  
  module.exports = { boomErrorHandler, sequelizeErrorHandler };