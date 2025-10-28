const db = require('../config/db');

const getAllRooms = async () => {
  const [rows] = await db.execute('SELECT * FROM Room');
  return rows;
};

module.exports = { getAllRooms };
