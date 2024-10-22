-- Get all owners and their dogs (if any)
SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
LEFT JOIN dogs
ON owners.id = dogs.owner_id;

-- Get all dogs and their owners (if any)
SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
RIGHT JOIN dogs
ON owners.id = dogs.owner_id;

-- Get all owners who have dogs (and get their dog's name)
SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
INNER JOIN dogs
ON owners.id = dogs.owner_id;


-- Get all owners and all dogs
SELECT
  first_name,
  last_name,
  dogs.name AS dogs_name
FROM owners
FULL OUTER JOIN dogs
ON owners.id = dogs.owner_id;
