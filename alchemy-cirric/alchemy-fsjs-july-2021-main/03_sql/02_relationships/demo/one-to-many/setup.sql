DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS owners CASCADE;

CREATE TABLE owners (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  weight TEXT,
  owner_id BIGINT,
  FOREIGN KEY (owner_id) REFERENCES owners(id)
);

INSERT INTO owners (first_name, last_name)
VALUES ('Dan', 'Minkevitch');

INSERT INTO owners (first_name, last_name)
VALUES ('Samwise', 'Gamgee');

INSERT INTO dogs (name, age, weight, owner_id)
VALUES ('Ruby', 10, '11 lbs', 1);

INSERT INTO dogs (name, age, weight, owner_id)
VALUES ('Spot', 5, '20 lbs', 1);

INSERT INTO dogs (name, age, weight)
VALUES ('Banjo', 7, '30 lbs');
