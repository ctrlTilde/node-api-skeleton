const responder = require('../lib/responder')
async function welcome(req, res) {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
  };
  responder(res, 200, 'success', healthCheck.uptime, healthCheck.message);
}


module.exports = {welcome}