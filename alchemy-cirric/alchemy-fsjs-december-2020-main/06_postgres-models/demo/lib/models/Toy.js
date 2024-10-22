const pool = require('../utils/pool');

module.exports = class Toy {
  id;
  color;
  type;

  constructor(row) {
    this.id = row.id;
    this.color = row.color;
    this.type = row.type;
  }

  static async insert({ color, type }) {
    const { rows } = await pool.query(
      'INSERT INTO toys (color, type) VALUES($1, $2) RETURNING *',
      [color, type]
    );

    return new Toy(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM toys WHERE id=$1',
      [id]
    );

    if(!rows[0]) throw new Error(`No toy with id ${id}`);
    return new Toy(rows[0]);
  }

  static async update(id, { color, type }) {
    const { rows } = await pool.query(
      `UPDATE toys
        SET color=$1,
            type=$2
        WHERE id=$3
        RETURNING *`,
      [color, type, id]
    );

    if(!rows[0]) throw new Error(`No toy with id ${id} exists`);
    return new Toy(rows[0]);
  }
};
