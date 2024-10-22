const pool = require('../utils/pool');

module.exports = class Tag {
  id;
  title;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
  }

  static async insert({ title }) {
    const { rows } = await pool.query(
      'INSERT INTO tags (title) VALUES ($1) RETURNING *',
      [title]
    );

    return new Tag(rows[0]);
  } 
};
