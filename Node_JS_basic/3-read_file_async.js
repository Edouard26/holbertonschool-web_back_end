const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the file content by new lines to get individual rows
      const rows = data.split('\n').filter((row) => row.trim() !== '');

      // Remove the header row
      rows.shift();

      // Initialize counters and groups
      const totalStudents = rows.length;
      const fields = {};

      // Process each row
      rows.forEach((row) => {
        const [firstname, , , field] = row.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their first names
      for (const [field, students] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
