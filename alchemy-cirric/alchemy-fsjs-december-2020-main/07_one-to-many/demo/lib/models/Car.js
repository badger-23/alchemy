const pool = require('../utils/pool');
const Ride = require('./Ride');

module.exports = class Car {
  id;
  color;
  make;
  model;

  constructor(row) {
    this.id = row.id;
    this.color = row.color;
    this.make = row.make;
    this.model = row.model;
  }

  static async insert({ color, make, model }) {
    const { rows } = await pool.query(
      'INSERT INTO cars (color, make, model) VALUES ($1, $2, $3) RETURNING *',
      [color, make, model]
    );

    return new Car(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        cars.*,
        array_to_json(array_agg(rides.*)) AS rides
      FROM
        cars
      JOIN rides
      ON cars.id = rides.car_id
      WHERE cars.id=$1
      GROUP BY cars.id
      `,
      [id]
    );

    if(!rows[0]) throw new Error(`No car with id ${id} found`);

    return {
      ...new Car(rows[0]),
      rides: rows[0].rides.map(ride => new Ride(ride))
    };
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM cars');

    return rows.map(row => new Car(row));
  }

  static async update(id, { color, make, model }) {
    const { rows } = await pool.query(
      `UPDATE cars
        SET color=$1,
            make=$2,
            model=$3
        WHERE id=$4
        RETURNING *`,
      [color, make, model, id]
    );

    if(!rows[0]) throw new Error(`No car with id ${id} found`);
    return new Car(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM cars WHERE id=$1 RETURNING *',
      [id]
    );

    return new Car(rows[0]);
  }
};
