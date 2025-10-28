const RoomModel = require('../models/roomModel');

const getRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.getAllRooms();
    res.json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getRooms };
