import pool from '../utils/pool';

export default class User {
  id;
  username;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
  }

  static async insert({ username }) {
    const { rows } = await pool.query(
      'INSERT INTO users (username) VALUES ($1) RETURNING *',
      [username]
    );

    return new User(rows[0]);
  }
}
