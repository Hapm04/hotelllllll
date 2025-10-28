const db = require('../config/db');

const getAllEmployees = async () => {
  const [rows] = await db.execute('SELECT * FROM Employee');
  return rows;
};

module.exports = { getAllEmployees };
