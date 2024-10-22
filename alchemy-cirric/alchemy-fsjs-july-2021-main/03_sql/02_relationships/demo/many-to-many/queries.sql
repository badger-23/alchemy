-- Get all owners and their dogs (if any)
SELECT * FROM dogs;
SELECT * FROM owners;
SELECT * FROM dogs_owners;

SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
LEFT JOIN dogs_owners
ON owners.id = dogs_owners.owner_id
LEFT JOIN dogs
ON dogs_owners.dog_id = dogs.id;

-- Get all dogs and their owners (if any)
SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
RIGHT JOIN dogs_owners
ON dogs_owners.owner_id = owners.id
RIGHT JOIN dogs
ON dogs_owners.dog_id = dogs.id;


-- Get all owners who have dogs (and get their dog's name)
SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
INNER JOIN dogs_owners
ON dogs_owners.owner_id = owners.id
INNER JOIN dogs
ON dogs_owners.dog_id = dogs.id;


-- Get all owners and all dogs
SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
FULL OUTER JOIN dogs_owners
ON dogs_owners.owner_id = owners.id
FULL OUTER JOIN dogs
ON dogs_owners.dog_id = dogs.id;
