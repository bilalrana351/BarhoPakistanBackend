// server/middleware/logger.js

const logger = (req, res, next) => {
    // Capture the original `res.send` method
    const originalSend = res.send;
  
    // Override `res.send` to log status and then call the original `res.send`
    res.send = function (...args) {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> Status: ${res.statusCode}`);
      originalSend.apply(res, args);
    };
  
    next();
  };
  
  module.exports = logger;
  