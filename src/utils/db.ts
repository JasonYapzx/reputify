import mysql from 'mysql2/promise';
// Create an interface to be used for typing
export interface DBSettings {
  host: string,
  port: number, 
  user: string,
  password: string, 
  database: string
}

export const getDBSettings = () : DBSettings => {
  return {
      host: "localhost",
      port: 3306, 
      user: "user",
      password: "password", 
      database: "mysql_db",
  }
}

const pool = mysql.createPool({
  ...getDBSettings(),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function query(sql: string, values: any[] = []) {
  try {
    const [results] = await pool.execute(sql, values);
    return results;
  } catch (error: any) {
    console.error('Database query error:', error);
    throw new Error(error.message);
  }
}