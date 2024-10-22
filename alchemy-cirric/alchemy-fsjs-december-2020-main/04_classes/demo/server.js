// where express will live
const express = require('express');
const app = express();

const strip = code => {
  const patterns = /\(|\)|\{|\}|\[|\]/g;
  return code.match(patterns);
};

app.use(express.json());

app.post('/lint', (req, res) => {
  // req.body.code -> 'const add = (a, b) => { return a + b };
  const brackets = strip(req.body.code);
  // ['(', ')', '{', '}']

  const stack = new Stack();

  // iterate through brackets
  // -> if(bracket is an opener) stack.push(bracket)
  // -> if(bracket is a closer)
  // -> -> const opener = stack.pop()
  // -> -> opener match bracket (if so we are good otherwise error!)

  // res.send(with result)
});

// listen
app.listen(7890, () => {
  console.log('started on 7890');
});
