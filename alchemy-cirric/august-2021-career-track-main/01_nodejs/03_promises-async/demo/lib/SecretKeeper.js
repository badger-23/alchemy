// instance methods: .then, .toUpperCase(), .map/.find/.filter/.some/.every
// static methods: Math.random(), JSON.stringify(), JSON.parse(), Object.keys()

const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

class SecretKeeper {
  constructor(rootDir) {
    const fileName = `${shortid.generate()}.txt`;
    this.secretFile = path.join(rootDir, fileName);
  }

  keep(secret) {
    return writeFile(this.secretFile, secret);
  }

  tell() {
    return readFile(this.secretFile, 'utf8').catch((error) => {
      if (error.code === 'ENOENT') {
        return null;
      }

      throw error;
    });
  }
}

module.exports = SecretKeeper;
