import pool from '../utils/pool';

export default class Comment {
  id;
  text;
  postId;
  author;

  constructor(row) {
    this.id = row.id;
    this.text = row.text;
    this.postId = row.post_id;
    this.author = {
      id: row.commenter_id,
      username: row.commenter_username,
    };
  }

  static async insert({ text, postId, authorId }) {
    const { rows } = await pool.query(
      `
      WITH new_comment AS (
        INSERT INTO
          comments (text, post_id, author_id)
        VALUES
          ($1, $2, $3)
        RETURNING *
      )
      SELECT
        new_comment.*,
        new_comment.author_id AS commenter_id,
        username AS commenter_username
      FROM
        new_comment
      INNER JOIN
        users
      ON
        users.id = new_comment.author_id
      WHERE
        users.id=$3
      `,
      [text, postId, authorId]
    );

    return new Comment(rows[0]);
  }
}
