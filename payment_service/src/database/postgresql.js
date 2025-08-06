import dotenv from "dotenv";
import pkg from "pg";

const { Pool } = pkg;
dotenv.config({ path: ".env.development.local" });


export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

console.log("RAW PASSWORD VALUE:", process.env.DB_PASSWORD);
console.log("TYPE:", typeof process.env.DB_PASSWORD);


// Test connection
pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));
