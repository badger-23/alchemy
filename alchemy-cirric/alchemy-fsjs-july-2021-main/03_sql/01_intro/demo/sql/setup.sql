DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT
);
