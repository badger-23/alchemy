const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});


// BEGIN;
// SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;
// UPDATE accounts SET balance = 400 - 100 WHERE id = 1;
// COMMIT;
async function fake() {
  const client = await pool.connect();
  await client.query('BEGIN;');
  try {
    const { rows } = await client.query('SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;');
    await client.query(`UPDATE accounts SET balance = $1 - 100 WHERE id = 1;`, [rows[0].balance]);
    await client.query('COMMIT;');
  } catch(e) {
    await client.query('ROLLBACK;');
  }
}
