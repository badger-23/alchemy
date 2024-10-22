import pool from '../utils/pool.js';

export default class Tweet {
  id;
  userId;
  text;

  constructor(row) {
    this.id = row.id;
    this.userId = row.user_id;
    this.text = row.text;
  }

  static async insert({ userId, text }) {
    const { rows } = await pool.query(
      'INSERT INTO tweets (user_id, text) VALUES ($1, $2) RETURNING *',
      [userId, text]
    );

    return new Tweet(rows[0]);
  }
}
