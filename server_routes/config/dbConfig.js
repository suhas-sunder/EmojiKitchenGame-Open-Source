import dotenv from "dotenv";
import pkg from "pg";

// Load environment variables from the .env file
dotenv.config({ path: "./.env" }); // Adjust the path if needed

// Destructure the Pool class from the imported pg package
const { Pool } = pkg;

// Define the connection string for the PostgreSQL database
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// Create a new Pool instance with the connection string
const pool = new Pool({
  connectionString: connectionString,
});

// Function to test the database connection
const testDbConnection = async () => {
  try {
    // Get a client from the pool
    const client = await pool.connect();

    console.log("Database connection successful!");

    // Execute a simple query to test the connection
    const result = await client.query("SELECT NOW() AS now");
    console.log("Current Time from DB:", result.rows[0].now);

    // Release the client back to the pool
    client.release();
  } catch (err) {
    console.error("Database connection error:", err.stack);
  } finally {
    // End the pool
    await pool.end();
  }
};

// Run the test function if this module is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testDbConnection();
}

// Export the pool object so it can be used elsewhere in your application
export { pool };