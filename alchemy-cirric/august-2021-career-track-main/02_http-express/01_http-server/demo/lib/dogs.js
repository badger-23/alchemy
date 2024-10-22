const parseBody = require('./parse-body');
const SimpleDb = require('./simple-db');

const db = new SimpleDb(`${__dirname}/../__tests__/store`);

const dogsRouter = {
  async post(req, res) {
    const dog = await parseBody(req);
    await db.save(dog);
    const savedDog = await db.get(dog.id);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(savedDog));
  },

  async get(req, res) {
    const [, , id] = req.url.split('/');

    console.log(`GET /dogs/${id ?? ''}`);

    if (id) {
      // Get a dog by its id
      const dog = await db.get(id);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(dog));
    } else {
      // Get all dogs
      const dogs = await db.getAll();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(dogs));
    }
  },
};

module.exports = dogsRouter;
