CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  weight TEXT
);

CREATE TABLE owners (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  dog_id BIGINT UNIQUE,
  FOREIGN KEY (dog_id) REFERENCES dogs(id)
);

INSERT INTO dogs (name, age, weight)
VALUES ('Ruby', 10, '11 lbs');

INSERT INTO dogs (name, age, weight)
VALUES ('Spot', 5, '20 lbs');

INSERT INTO dogs (name, age, weight)
VALUES ('Jeep', 2, '7 lbs');

INSERT INTO dogs (name, age, weight)
VALUES ('Snoopy', 85, '15 lbs');

INSERT INTO owners (first_name, last_name, dog_id)
VALUES ('Dan', 'Minkevitch', 1);

INSERT INTO owners (first_name, last_name)
VALUES ('Samwise', 'Gamgee');
