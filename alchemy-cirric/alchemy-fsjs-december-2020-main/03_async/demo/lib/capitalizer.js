const fs = require('fs').promises;

const capitalizer = (toWrite, path) => {
  return fs.writeFile(path, toWrite.toUpperCase());
};

module.exports = capitalizer;
