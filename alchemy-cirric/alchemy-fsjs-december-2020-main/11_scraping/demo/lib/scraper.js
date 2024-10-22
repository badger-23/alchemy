const parse = require("./parse");
const request = require("./request");

request()
  .then(document => parse(document))
  .then(products => store(products))
  .then(console.log);
