const app = require('./lib/app.js');
const pool = require('./lib/utils/pool.js');
const https = require('https');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 7890;

https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem'), 'utf8'),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'), 'utf8')
}, app).listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
