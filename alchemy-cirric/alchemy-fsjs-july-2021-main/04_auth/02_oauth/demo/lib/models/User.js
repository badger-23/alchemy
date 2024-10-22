const pool = require('../utils/pool');

module.exports = class User {
  username;
  avatarUrl;

  constructor(row) {
    this.username = row.github_username;
    this.avatarUrl = row.github_avatar_url;
  }

  static async insert({ username, avatarUrl }) {
    const { rows } = await pool.query(
      'INSERT INTO users (github_username, github_avatar_url) VALUES ($1, $2) RETURNING *',
      [username, avatarUrl]
    );

    return new User(rows[0]);
  }

  static async findByUsername(username) {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE github_username=$1',
      [username]
    );

    // const user = await User.findByUsername('gobasdgast34as')
    // if (!user) User.insert(...)
    if (!rows[0]) return null;
    return new User(rows[0]);
  }

  static async findByUsernameWithTweets(username) {
    const { rows } = await pool.query(
      `SELECT
        username,
        json_agg(text) AS tweets
      FROM
        users
      INNER JOIN tweets
      ON users.github_username = tweets.username
      WHERE username=$1
      GROUP BY username
      `,
      [username]
    );

    return rows[0];
  }

  toJSON() {
    return {
      username: this.username,
      avatarUrl: this.avatarUrl,
    };
  }
};
