// server/server.js

const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3001;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'installation_lifecycle_manager'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to the database');
  }
});

//get user's
app.get('/project', (req, res) => {
  // Example SQL query to retrieve users
  const sql = 'SELECT * FROM project';

  // Execute the query
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

app.get('/test', (req, res) => {
  res.send('Testing route!');
});

app.listen(port, () => {
  console.log(`Express.js server is running at http://localhost:${port}`);
});
