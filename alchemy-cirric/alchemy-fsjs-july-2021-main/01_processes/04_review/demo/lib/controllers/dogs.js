import { Router } from 'express';
import Dog from '../models/Dog';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const dog = await Dog.insert(req.body);

      res.send(dog);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      // req.params = { id: '1' }
      const dog = await Dog.getById(id);

      res.send(dog);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const dogs = await Dog.getAll();

      res.send(dogs);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, age, favoriteTreat } = req.body;

      const updatedDog = await Dog.updateById(id, { name, age, favoriteTreat });

      res.send(updatedDog);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const dog = await Dog.deleteById(id);

      res.send({
        message: `dog-gone-it, dog ${dog.name} was deleted!`,
      });
    } catch (err) {
      next(err);
    }
  });
