DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS videos;

CREATE TABLE users(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE videos(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  url TEXT NOT NULL,
  user_id BIGINT REFERENCES users(id) NOT NULL
);
