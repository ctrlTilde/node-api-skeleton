function responder(res, statusCode, status, data, message) {
    res.status(statusCode).json({
      status,
      data,
      message,
    });
  }
  
  module.exports = responder;
  