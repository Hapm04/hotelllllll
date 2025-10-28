const shiftModel = require("../models/shiftModel");

exports.getShiftSchedule = async (req, res) => {
  try {
    const data = await shiftModel.getShiftSchedule();
    res.json(data);
  } catch (error) {
    console.error("Error loading shift schedule:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.getIncompleteShiftEmployees = async (req, res) => {
  try {
    const data = await shiftModel.getIncompleteShiftEmployees();
    res.json(data);
  } catch (error) {
    console.error("Error loading incomplete shifts:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.getShiftChangeRequests = async (req, res) => {
  try {
    const data = await shiftModel.getShiftChangeRequests();
    res.json(data);
  } catch (error) {
    console.error("Error loading shift change requests:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
