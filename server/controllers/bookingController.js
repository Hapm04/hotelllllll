const bookingModel = require("../models/bookingModel");

const getBookingHistory = async (req, res) => {
  try {
    const history = await bookingModel.fetchBookingHistory();
    res.json(history);
  } catch (err) {
    console.error("Lỗi khi lấy lịch sử đặt phòng:", err);
    res.status(500).json({ error: "Lỗi server" });
  }
};

module.exports = {
  getBookingHistory,
};
