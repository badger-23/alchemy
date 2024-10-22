-- Get all customer data
SELECT * FROM customer;

-- Select all inventory & rental data
SELECT *
FROM
  inventory
INNER JOIN
  rental
ON inventory.inventory_id = rental.inventory_id;

-- Select inventory items that have never been rented
SELECT *
FROM inventory
LEFT JOIN rental
ON inventory.inventory_id = rental.inventory_id
LEFT JOIN film
ON film.film_id = inventory.film_id
WHERE rental_id IS NULL;

-- Find all films without actors
SELECT *
FROM film
LEFT JOIN film_actor
ON film.film_id = film_actor.film_id
WHERE actor_id IS NULL;

-- Find actors without films
SELECT *
FROM actor
LEFT JOIN film_actor
ON film_actor.actor_id = actor.actor_id
WHERE film_id IS NULL;

-- Using a right join, get inventory items that have never been rented
SELECT *
FROM rental
RIGHT JOIN inventory
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
ON film.film_id = inventory.film_id
WHERE rental_id IS NULL;


-- Using FULL OUTER JOIN, find films without actors and actors without films
SELECT *
FROM film_actor
FULL OUTER JOIN film
ON film.film_id = film_actor.film_id
FULL OUTER JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE
  film_actor.actor_id IS NULL
OR
  film_actor.film_id IS NULL;
