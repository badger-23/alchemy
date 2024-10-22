import fs from 'fs';

console.log('=== BEGIN ===');

// 1. read hello.md
// 2. write hello-copy.md with everything from hello.md
// 3. read hello-copy.md
// 4. capitalize all the letter in it
// 5. write hello-capitals.md

fs.readFile('./hello.md', 'utf8', (err, contents) => {
  if (err) console.error(err);

  // reading the contents has finished
  console.log(contents);

  fs.writeFile('./hello-copy.md', contents, (err) => {
    console.log('writing done!');

    fs.readFile('./hello-copy.md', 'utf8', (err, copiedContents) => {
      console.log('Here are the copied contents:\n', copiedContents);

      fs.writeFile(
        './hello-capitals.md',
        copiedContents.toUpperCase(),
        (err) => {
          console.log('all done');
        }
      );
    });
  });
});

console.log('=== END ===');

// 1. print BEGIN
// 2. read hello.md
// 3. print END
// 4. print contents
