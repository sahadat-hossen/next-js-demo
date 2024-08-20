
import sql from 'mssql';

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // For Azure SQL, set to true. For local SQL Server, set to false or omit.
    trustServerCertificate: true, // Set to true if using self-signed certificates.
  },
};

export async function connectToDatabase() {
  try {
    const pool = await sql.connect(dbConfig);
    return pool;
  } catch (err) {
    console.error('Database connection failed!', err);
    throw err;
  }
}
