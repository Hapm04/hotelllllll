const orderModel = require("../models/orderModel");

exports.getCurrentCustomerByRoomId = async (req, res) => {
  const { roomId } = req.params;

  try {
    const customer = await orderModel.getCurrentCustomerByRoomId(roomId);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: "Không tìm thấy khách đang sử dụng phòng này." });
    }
  } catch (err) {
    console.error("Lỗi khi truy vấn khách đang thuê phòng:", err);
    res.status(500).json({ error: "Lỗi server." });
  }
};
