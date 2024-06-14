const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'my_user',
  password: 'my_password',
  database: 'my_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Example query
connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
