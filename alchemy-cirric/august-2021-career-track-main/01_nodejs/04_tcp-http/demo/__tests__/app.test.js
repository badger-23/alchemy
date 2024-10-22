const request = require('supertest');
const app = require('../app');

describe('app routes', () => {
  it('gets a dog from /dog', async () => {
    const res = await request(app).get('/dog');

    // res.text === any response that isn't JSON
    // res.body === any response that is JSON
    // res.body is essentially the same as JSON.parse(res.text)
    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dog!</title>
</head>
<body>
  <img src="https://danminkevitch.com/ruby.jpg" alt="Ruby!" />
</body>
</html>
`);
  });

  it('gets a dog JSON object from /dog.json', async () => {
    const res = await request(app).get('/dog.json');

    expect(res.body).toEqual({ name: 'ruby', age: 11, weight: '11 lbs' });
  });

  it('returns a 404 for any non-existent routes', async () => {
    const res = await request(app).get('/not-found');

    expect(res.text).toEqual('Not found :(');
  });
});
