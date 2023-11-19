import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";
import "dotenv/config";
export const connectionPool = mysql.createPool({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
});

const db = drizzle(connectionPool, {
  schema,
  mode: "default",
});

export default db;
