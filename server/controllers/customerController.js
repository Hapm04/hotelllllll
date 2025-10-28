const customerModel = require('../models/customerModel');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await customerModel.getAllCustomers();
    res.json(customers);
  } catch (err) {
    console.error('Lỗi khi lấy danh sách khách hàng:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBookingHistory = async (req, res) => {
  try {
    const history = await customerModel.getBookingHistory();
    res.json(history);
  } catch (err) {
    console.error('Lỗi khi lấy lịch sử đặt phòng:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
