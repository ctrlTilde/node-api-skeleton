const serverlessHttp = require('serverless-http');
const app = require('./app');

module.exports.handler = serverlessHttp(app);
