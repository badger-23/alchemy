const { mkdir, readdir } = require('fs/promises');
const path = require('path');
const copyFile = require('./copy-file');

const copyDir = (source, dest) => {
  // source = './__tests__/source/dir'
  // dest   = './__tests__/dest/dir-copy'

  return mkdir(dest)
    .then(() => readdir(source))
    .then((files) => {
      // files  = ['file1.txt', 'file2.txt', 'file3.txt']
      const filePromises = files.map((file) => {
        const srcFile = path.join(source, file);
        const destFile = path.join(dest, file);

        return copyFile(srcFile, destFile);
      });

      return Promise.all(filePromises);
    });
};

module.exports = copyDir;
