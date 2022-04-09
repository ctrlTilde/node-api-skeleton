const appRoot = require('app-root-path');
const winston = require('winston');

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'info',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
  transports: [
    // new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

logger.stream = {
  write(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports
    // (file and console)
    logger.info(message.toString(encoding));
  },
};

module.exports = logger;
