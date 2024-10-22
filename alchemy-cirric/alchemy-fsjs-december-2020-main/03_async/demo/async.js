// async/await
const fs = require('fs').promises

// async function reader() {
//   try {
//     const data = await fs.readFile('./README.md', 'utf-8');
//     console.log(data, file2);
//   } catch(err) {
//     console.log(err);
//   }
// }

// reader();

async function writer()  {
  try {
    await fs.writeFile('./async-cool.txt', 'This is a great fn')
    console.log('done');
  } catch(err) {
    console.log(err);
  }
}

writer();
