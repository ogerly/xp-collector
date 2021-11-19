import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'password_X1',
  database: 'demo_db'
});
  
export default db;