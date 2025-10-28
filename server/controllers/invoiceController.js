const invoiceModel = require("../models/invoiceModel");

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await invoiceModel.getAllInvoices();
    res.json(invoices);
  } catch (error) {
    console.error("Lỗi khi lấy hóa đơn:", error);
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};
