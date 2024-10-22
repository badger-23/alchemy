const pool = require('../utils/pool');

module.exports = class Video {
  id;
  title;
  url;
  userId;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.url = row.url;
    this.userId = row.user_id;
  }

  static async insert({ title, url, userId }) {
    const { rows } = await pool.query(
      'INSERT INTO videos (title, url, user_id) VALUES ($1, $2, $3) RETURNING *',
      [title, url, userId]
    );

    return new Video(rows[0]);
  }

  static async delete(id, userId) {
    const { rows } = await pool.query(
      'DELETE FROM videos WHERE id=$1 AND user_id=$2 RETURNING *',
      [id, userId]
    );
  }
};
