const { readFile, writeFile } = require('fs/promises');

const copyFile = async (source, dest) => {
  const contents = await readFile(source, 'utf8');
  const copiedFile = await writeFile(dest, contents);

  return copiedFile;
};

module.exports = copyFile;
