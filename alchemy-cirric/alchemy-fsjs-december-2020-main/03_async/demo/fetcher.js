const fetch = require('node-fetch');

Promise.all([
  fetch('https://history.muffinlabs.com/date'),
  fetch('https://rickandmortyapi.com/api/character/1')
])
  .then(([resDate, resRickAndMorty]) => {
    console.log(resDate, resRickAndMorty);
  });

// // request.get('https://history.muffinlabs.com/date')
// fetch('https://history.muffinlabs.com/date')
//   .then(res => {
//     // res.body
//     return res.json();
//   })
//   .then(json => {
//     console.log(json);
//   });

// function fetcher() {
//   const res = await fetch('https://history.muffinlabs.com/date')
//   const json = await res.json();
//   console.log(json);
// }
