import fs from 'fs';

const fsPromises = fs.promises;

// 1. read hello.md
// 2. write hello-copy.md with everything from hello.md
// 3. read hello-copy.md
// 4. capitalize all the letter in it
// 5. write hello-capitals.md

async function actions() {
  try {
    const contents = await fsPromises.readFile('./hello.md', 'utf8');

    await fsPromises.writeFile('./hello-copy.md', contents);

    const copyContents = await fsPromises.readFile('./hello-copy.md', 'utf8');

    await fsPromises.writeFile(
      './hello-capitals.md',
      copyContents.toUpperCase()
    );
  } catch (err) {
    console.error(err);
  }
}

actions();
