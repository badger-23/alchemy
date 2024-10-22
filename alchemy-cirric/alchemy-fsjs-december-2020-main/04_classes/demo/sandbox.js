const button = document.getElementById('button');

button.addEventListener('click', () => {
  // this code may never run
  // but for sure it doesn't run now
});

const fs = require('fs');

const contents = fs.readFile('./ingredients.txt', 'utf-8');

fs.readFile('./ingredients.txt', 'utf-8', (err, contents) => {

});

fs.promises.readFile('./ingredients.txt', 'utf-8')
  .then(contents => {

  });

async function reader() {
  const contents = await fs.promises.readFile('./ingredients.txt', 'utf-8');

}
