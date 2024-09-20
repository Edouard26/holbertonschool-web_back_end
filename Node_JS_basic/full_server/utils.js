const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    rows.shift(); // Remove the header row

    const fields = {};

    rows.forEach((row) => {
      const [firstname, , , field] = row.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;