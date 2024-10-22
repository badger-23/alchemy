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
  weight TEXT
);

CREATE TABLE dogs_owners (
  dog_id BIGINT REFERENCES dogs(id),
  owner_id BIGINT REFERENCES owners(id)
);

-- Add some doggos
INSERT INTO dogs (name, age, weight)
VALUES ('Ruby', 10, '11 lbs');

INSERT INTO dogs (name, age, weight)
VALUES ('Spot', 5, '20 lbs');

INSERT INTO dogs (name, age, weight)
VALUES ('Banjo', 7, '30 lbs');

INSERT INTO dogs (name, age, weight)
VALUES ('Buddy', 12, '70 lbs');

-- Add some owners
INSERT INTO owners (first_name, last_name)
VALUES ('Dan', 'Minkevitch');

INSERT INTO owners (first_name, last_name)
VALUES ('Samwise', 'Gamgee');

INSERT INTO owners (first_name, last_name)
VALUES ('Frodo', 'Baggins');

-- Connect dogs to their owners
INSERT INTO dogs_owners (dog_id, owner_id)
VALUES (1, 1);

INSERT INTO dogs_owners (dog_id, owner_id)
VALUES (2, 1);

INSERT INTO dogs_owners (dog_id, owner_id)
VALUES (2, 2);

INSERT INTO dogs_owners (dog_id, owner_id)
VALUES (3, 2);
