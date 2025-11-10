import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });

async function main() {
  try {
    await migrate(drizzle(migrationClient), {
      migrationsFolder: "./src/drizzle/migrations",
    });
    console.log("\n", "✅ Migrations completed successfully", "\n");
  } catch (error) {
    console.error("\n", "❌ Migration failed:", error, "\n");
    process.exit(1);
  } finally {
    await migrationClient.end();
  }
}

main();
