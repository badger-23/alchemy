// callback
const fs = require('fs');

fs.readFile('./README.md', 'utf-8', (err, data) => {
  if(err) console.log(err);

  console.log(data);
})
