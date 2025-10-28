const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// API: GET /api/bookings/history
router.get("/history", bookingController.getBookingHistory);

module.exports = router;
