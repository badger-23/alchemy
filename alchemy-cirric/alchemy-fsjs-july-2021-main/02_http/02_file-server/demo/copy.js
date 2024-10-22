import fs from 'fs';

const fsPromises = fs.promises;

function copyWithPromise(src, dest, onError) {
  return fsPromises
    .readFile(src)
    .then((contents) => fsPromises.writeFile(dest, contents))
    .catch((err) => onError(err.message));
}

async function copyWithAsync(src, dest, onError) {
  try {
    const contents = await fsPromises.readFile(src);

    await fsPromises.writeFile(dest, contents);
  } catch (err) {
    onError(err.message);
  }
}

const handleError = (err) => console.error(err);

copyWithAsync('../README.md', './FAKE-README.md', handleError).then(() =>
  console.log('done')
);
