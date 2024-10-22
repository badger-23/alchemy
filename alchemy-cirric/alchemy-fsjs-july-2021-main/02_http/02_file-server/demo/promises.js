import fs from 'fs';

const fsPromises = fs.promises;

// 1. read hello.md
// 2. write hello-copy.md with everything from hello.md
// 3. read hello-copy.md
// 4. capitalize all the letter in it
// 5. write hello-capitals.md

const createCopy = (contents) =>
  fsPromises.writeFile('./hello-copy.md', contents);

const readCopy = () => fsPromises.readFile('./hello-copy.md', 'utf8');

const uppercaseContents = (copyContents) => copyContents.toUpperCase();

const createUppercaseFile = (upperCased) =>
  fsPromises.writeFile('./hello-capitals.md', upperCased);

const actions = fsPromises
  .readFile('./hello.md', 'utf8')
  .then(createCopy)
  .then(readCopy)
  .then(uppercaseContents)
  .then(createUppercaseFile)
  .catch((err) => console.error(err));

actions.then(() => console.log('really really done this time!'));
