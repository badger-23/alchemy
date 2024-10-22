# SQL Aggregations

## Outline

- aggregation functions
  - `COUNT`
  - `SUM`
  - `AVG`
  - `MIN`
  - `MAX`
- grouping data with `GROUP BY`
  - by column(s)
  - `ROLLUP` / `CUBE`

## Aggregating data

### COUNT

```sql
SELECT
	COUNT(*)
FROM
	film
```

### SUM

```sql
SELECT
	SUM(amount)
FROM
	payment
```

### AVG

```sql
SELECT
	AVG(amount)
FROM
	payment
```

### MIN

```sql
SELECT
	MIN(length)
FROM
	film
```

### MAX

```sql
SELECT
	MAX(length)
FROM
	film
```

## Subqueries

```sql
SELECT
	film_id,
	title,
	rental_rate
FROM
	film
WHERE
	rental_rate > (
		SELECT
			AVG (rental_rate)
		FROM
			film
	);
```

## Grouping data

In postgres the `GROUP BY` clause can be used to organize data into buckets (groups).

> The GROUP BY clause is used to group together those rows in a table that have the same values in all the columns listed.
>
> - [PostgreSQL.org](https://www.postgresql.org/docs/13/queries-table-expressions.html#QUERIES-GROUP)

> The GROUP BY clause divides the rows returned from the SELECT statement into groups.
>
> - [PostgreSQL Tutorial](https://www.postgresqltutorial.com/postgresql-group-by/)

```sql title="GROUP BY column"
SELECT
	country,
	COUNT(*) as total_cities
FROM
	city
INNER JOIN country
ON city.country_id = country.country_id
GROUP BY country.country_id
ORDER BY total_cities DESC
```

```sql
SELECT
	customer_id,
	SUM(amount)
FROM
	payment
GROUP BY customer_id
ORDER BY sum DESC
```

```sql title="GROUP BY multiple columns"
SELECT
	rating,
	rental_rate,
	COUNT(*)
FROM
	film
GROUP BY rating, rental_rate
```

```sql title="GROUPING SETS" subtitle="ROLLUP"
SELECT
	rating,
	rental_rate,
	UNNEST(special_features) as feature,
	count(*)
FROM
	film
GROUP BY
	ROLLUP(rating, rental_rate, UNNEST(special_features))
ORDER BY rating, rental_rate, feature
```

```sql title="GROUPING SETS" subtitle="CUBE"
SELECT
	rating,
	rental_rate,
	UNNEST(special_features) as feature,
	count(*)
FROM
	film
GROUP BY
	CUBE(rating, rental_rate, UNNEST(special_features))
ORDER BY rating, rental_rate, feature
```

## Window Aggregations

Regular Aggregations and GROUP BYs reduce the number of rows returned by
a query. A Window Aggregation does not reduce the number of rows returned
by a query.

### PARTITION on a window

```sql
SELECT
	customer_id,
	AVG(amount)
FROM
	payment
GROUP BY customer_id
ORDER BY avg DESC
```

```sql
SELECT
	customer_id,
	amount,
	AVG(amount) OVER (PARTITION BY customer_id)
FROM
	payment
ORDER BY avg DESC
```

### RANK

```sql
SELECT
	length,
	RANK() OVER(ORDER BY length DESC)
FROM
	film
ORDER BY length DESC
```
