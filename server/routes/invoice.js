const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

// Lấy tất cả hóa đơn
router.get("/", invoiceController.getAllInvoices);

module.exports = router;
