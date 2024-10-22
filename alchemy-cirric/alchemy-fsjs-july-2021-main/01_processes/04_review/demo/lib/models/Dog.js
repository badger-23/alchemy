import pool from '../utils/pool';

export default class Dog {
  id;
  name;
  age;
  favoriteTreat;

  constructor(row) {
    // row = {id: '1', name: 'ruby', age: 10, favorite_treat: 'chicken' }
    // { id: row.id, name: row.name, age: row.age, favoriteTreat: row.favorite_treat }
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.favoriteTreat = row.favorite_treat;
  }

  static async insert({ name, age, favoriteTreat }) {
    // dog = { name, age, favoriteTreat }
    const { rows } = await pool.query(
      'INSERT INTO dogs (name, age, favorite_treat) VALUES ($1, $2, $3) RETURNING *',
      [name, age, favoriteTreat]
    );

    return new Dog(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM dogs WHERE id=$1', [id]);

    return new Dog(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from dogs');

    return rows.map((row) => new Dog(row));
  }

  static async updateById(id, { name, age, favoriteTreat }) {
    const existingDog = await Dog.getById(id);
    const newName = name ?? existingDog.name;
    const newAge = age ?? existingDog.age;
    const newTreat = favoriteTreat ?? existingDog.favoriteTreat;

    const { rows } = await pool.query(
      'UPDATE dogs SET name=$1, age=$2, favorite_treat=$3 WHERE id=$4 RETURNING *',
      [newName, newAge, newTreat, id]
    );

    return new Dog(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM dogs WHERE id=$1 RETURNING *',
      [id]
    );

    return new Dog(rows[0]);
  }
}
