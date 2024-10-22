const pool = require('../utils/pool');

module.exports = class Tweet {
  id;
  text;

  constructor(row) {
    this.id = row.id;
    this.text = row.text;
  }

  static async insert({ text, tags = [] }) {
    const { rows }  = await pool.query(
      'INSERT INTO tweets (text) VALUES ($1) RETURNING *',
      [text]
    );

    await pool.query(
      `INSERT INTO tweets_tags (tweet_id, tag_id)
      SELECT ${rows[0].id}, id FROM tags WHERE title = ANY($1::text[])`,
      [tags]
    );

    return new Tweet(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `SELECT
        tweets.*,
        array_agg(tags.title) AS tags
      FROM
        tweets_tags
      JOIN tweets
      ON tweets_tags.tweet_id = tweets.id
      JOIN tags
      ON tweets_tags.tag_id = tags.id
      WHERE tweets.id=$1
      GROUP BY tweets.id`,
      [id]
    );

    if(!rows[0]) throw new Error(`No tweet found for id ${id}`);

    return {
      ...new Tweet(rows[0]),
      tags: rows[0].tags
    };
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM tweets');

    return rows.map(row => new Tweet(row));
  }

  static async update(id, { text }) {
    const { rows } = await pool.query(
      'UPDATE tweets SET text=$1 WHERE id=$2 RETURNING *',
      [text, id]
    );

    if(!rows[0]) throw new Error(`No tweet found for id ${id}`);

    return new Tweet(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM tweets WHERE id=$1 RETURNING *',
      [id]
    );

    return new Tweet(rows[0]);
  }
};
