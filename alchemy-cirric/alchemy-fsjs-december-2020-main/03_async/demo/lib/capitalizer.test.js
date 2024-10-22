const fs = require('fs').promises
const capitalizer = require('./capitalizer');

describe('capitalizer fn', () => {
  afterEach(() => {
    return fs.rm('./caps.txt');
  });
  
  it('capitalizes a string and writes it to disk', async() => {
    await capitalizer('spot', './caps.txt');
    const contents = await fs.readFile('./caps.txt', 'utf-8');
    expect(contents).toEqual('SPOT');
  });
});
