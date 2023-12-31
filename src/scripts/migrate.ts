import db from "../db";
import { migrate } from "drizzle-orm/mysql2/migrator";

try {
  migrate(db, { migrationsFolder: "src/db/migrations" }).then(() => {
    console.log("✅ Migrations done sucessfully");
    process.exit(0);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
