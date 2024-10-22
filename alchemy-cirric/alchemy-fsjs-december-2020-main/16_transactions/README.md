# Transactions

## Simple transactions

* `BEGIN`
* `COMMIT`
* `ROLLBACK`

```sql
CREATE TABLE nums(
  n INTEGER NOT NULL
);
```

```sql
BEGIN;
INSERT INTO nums (n) VALUES (1);
INSERT INTO nums (n) VALUES (2);
INSERT INTO nums (n) VALUES (3);
COMMIT;
```

```sql
BEGIN;
INSERT INTO nums (n) VALUES (1);
INSERT INTO nums (n) VALUES (2);
INSERT INTO nums (n) VALUES (3);
ROLLBACK;
```

## State Change

```sql
CREATE TABLE accounts(
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  balance INTEGER CHECK (balance > 0) DEFAULT 1000
);

INSERT INTO accounts (name) VALUES ('spot');
INSERT INTO accounts (name) VALUES ('rover');
```

```sql
BEGIN;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;
```

```sql
BEGIN;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;
UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
ROLLBACK;
```

## One To One relationships

```sql
CREATE TABLE users (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	email TEXT NOT NULL UNIQUE,
	password_hash TEXT NOT NULL
);

CREATE TABLE user_preferences (
	id BIGINT PRIMARY KEY REFERENCES users(id) DEFERRABLE INITIALLY DEFERRED,
	phone BOOLEAN NOT NULL,
	email BOOLEAN NOT NULL
);

ALTER TABLE users ADD FOREIGN KEY(id) REFERENCES user_preferences(id) DEFERRABLE INITIALLY DEFERRED;
```

```sql
BEGIN;
INSERT INTO users (email, password_hash) VALUES ('test@test.com', '1234') RETURNING id;
INSERT INTO user_preferences (id, phone, email) VALUES(1, true, true);
COMMIT;
```

```sql
BEGIN;
INSERT INTO users (email, password_hash) VALUES ('test1@test.com', '1234') RETURNING id;
INSERT INTO user_preferences (id, phone) VALUES(1, true);
COMMIT;
```

## Locks

```sql
BEGIN;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;
```

```sql
SELECT a.datname,
         l.relation::regclass,
         l.transactionid,
         l.mode,
         l.GRANTED,
         a.usename,
         a.query,
         a.query_start,
         age(now(), a.query_start) AS "age",
         a.pid
FROM pg_stat_activity a
JOIN pg_locks l ON l.pid = a.pid
ORDER BY a.query_start;
```

```sql
BEGIN;
SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;
```

```sql
BEGIN;
LOCK TABLE accounts;
COMMIT;
```
