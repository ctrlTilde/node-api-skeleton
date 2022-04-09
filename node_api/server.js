require('dotenv').config();
const app = require('./app');

let port = process.env.PORT || 8080;
if (process.env.NODE_ENV === 'test') {
  port = 3000;
}

const server = app.listen(port, async () => {
  // eslint-disable-next-line no-console
  console.log(`API now launching from http://127.0.0.1:${port}`);
});
module.exports = server;
