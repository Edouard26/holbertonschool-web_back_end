const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define a route for the endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the endpoint /students
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the Express application
module.exports = app;