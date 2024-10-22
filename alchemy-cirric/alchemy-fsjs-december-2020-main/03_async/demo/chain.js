// promise chain
const fs = require('fs').promises;

// fs.readFile('./README.md', 'utf-8')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

fs.writeFile('./chain-cool.txt', 'this is also good')
  .then(() => console.log('done'))
  .catch(err => console.log(err));
