-- Get all owners and their dogs (if any)
SELECT
  owners.first_name,
  owners.last_name,
  dogs.name AS dogs_name
FROM owners
LEFT JOIN dogs
ON owners.dog_id = dogs.id;

-- Get all dogs and their owners (if any)
SELECT
  owners.first_name,
  owners.last_name,
  dogs.name AS dogs_name
FROM owners
RIGHT JOIN dogs
ON owners.dog_id = dogs.id;

-- Get all owners who have dogs (and get their dog's name)
SELECT
  owners.first_name,
  owners.last_name,
  dogs.name AS dogs_name
FROM owners
INNER JOIN dogs
ON owners.dog_id = dogs.id;

-- Get all owners and all dogs
SELECT
  owners.first_name,
  owners.last_name,
  dogs.name AS dogs_name
FROM owners
FULL OUTER JOIN dogs
ON owners.dog_id = dogs.id;

-- Get all owners that don't have dogs
SELECT
  owners.first_name,
  owners.last_name,
  dogs.name AS dogs_name
FROM owners
LEFT JOIN dogs
ON owners.dog_id = dogs.id
WHERE dogs.id IS NULL;

-- Get all owners that don't have dogs (without joining)
SELECT
  owners.first_name,
  owners.last_name
FROM owners
WHERE dog_id IS NULL;
