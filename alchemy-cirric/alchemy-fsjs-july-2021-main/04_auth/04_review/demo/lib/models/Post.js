import pool from '../utils/pool';
import Comment from './Comment';

export default class Post {
  id;
  text;
  imageUrl;
  author;

  constructor(row) {
    this.id = row.id;
    this.text = row.text;
    this.imageUrl = row.image_url;
    this.author = { id: row.author_id, username: row.username };
    this.comments =
      row.comments?.map((comment) => new Comment(comment)) ?? undefined;
  }

  static async insert({ text, imageUrl, authorId }) {
    const { rows } = await pool.query(
      `
      WITH new_post AS (
        INSERT INTO
          posts (text, image_url, author_id)
        VALUES
          ($1, $2, $3)
        RETURNING *
      )
      SELECT
        username,
        new_post.*
      FROM
        new_post
      INNER JOIN
        users
      ON
        users.id = new_post.author_id
      WHERE
        users.id=$3
      `,
      [text, imageUrl, authorId]
    );

    return new Post(rows[0]);
  }

  static async findByAuthor(username) {
    const { rows } = await pool.query(
      `
      SELECT 
        username, 
        posts.*
      FROM
        posts
      INNER JOIN
        users
      ON
        posts.author_id = users.id
      WHERE
        username=$1`,
      [username]
    );

    if (!rows[0]) return null;

    return rows.map((row) => new Post(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        posts
      WHERE
        id=$1`,
      [id]
    );

    if (!rows[0]) return null;

    return new Post(rows[0]);
  }

  async getComments() {
    const { rows } = await pool.query(
      `
      SELECT
        posts.*,
        username,
        JSON_AGG(
          JSON_BUILD_OBJECT(
            'id', CAST(comments.id AS TEXT),
            'text', comments.text,
            'post_id', CAST(comments.post_id AS TEXT),
            'commenter_id', CAST(comments.author_id AS TEXT),
            'commenter_username', (
              SELECT 
                username
              FROM 
                users
              LEFT JOIN 
                comments c
              ON 
                c.author_id = users.id
              WHERE 
                users.id = c.author_id
              GROUP BY 
                username
            )
          )
        ) AS comments
      FROM
        posts
      LEFT JOIN
        comments
      ON
        posts.id = comments.post_id
      INNER JOIN
        users
      ON
        posts.author_id = users.id
      WHERE
        posts.id = $1
      GROUP BY
        posts.id, users.id
    `,
      [this.id]
    );

    return new Post(rows[0]);
  }
}
