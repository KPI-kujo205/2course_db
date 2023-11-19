import { role } from "../db/schema";
import db from "../db";

(async () => {
  try {
    await db.delete(role);
    await db.insert(role).values([
      { id: 1, name: "client" },
      { id: 2, name: "expert" },
    ]);
    console.log("Initial values inserted successfully");
  } catch (e) {
    console.error("Failed to insert Initial Values", e);
  }
})();
