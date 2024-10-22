const pool = require('../utils/pool');

module.exports = class Ride {
  id;
  duration;
  carId;

  constructor(row) {
    this.id = String(row.id);
    this.duration = row.duration;
    this.carId = String(row.car_id);
  }

  static async insert({ duration, carId }) {
    const { rows } = await pool.query(
      'INSERT INTO rides (duration, car_id) VALUES ($1, $2) RETURNING *',
      [duration, carId]
    );

    return new Ride(rows[0]);
  }
};
