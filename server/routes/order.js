const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Lấy thông tin khách hàng đang thuê phòng theo RoomID
router.get("/current/:roomId", orderController.getCurrentCustomerByRoomId);

module.exports = router;
