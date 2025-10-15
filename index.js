import pkg from "pg";
import "dotenv/config";
const { Client } = pkg;

// Use environment variable for connection string
// Make sure your .env has: DATABASE_URL=postgresql://readonly_user:password@host:port/db?sslmode=require
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  try {
    await client.connect();

    // Test: Get current time
    const nowRes = await client.query("SELECT NOW()");
    console.log("Connected:", nowRes.rows[0]);

    // Fetch all tables in public schema
    const tablesRes = await client.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_type='BASE TABLE' AND table_schema='public'
      ORDER BY table_name;
    `);

    console.log("Tables in public schema:");
    tablesRes.rows.forEach(t => console.log(`- ${t.table_name}`));
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.end();
  }
})();
