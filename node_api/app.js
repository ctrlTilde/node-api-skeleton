const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const logger = require('morgan');

const routes = require('./api/routes');
const winston = require('./api/lib/logger');

app = express();
app.use(logger('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(routes);

app.use((err, req, res, next) => {
    // render the error page
    res.status(err.status || 500);
    res.json({
      status: 'error',
      data: err.message,
      message: 'Something went wrong!!! Please try again later.',
    });
  });
  
module.exports = app;
