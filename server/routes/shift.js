const express = require("express");
const router = express.Router();
const shiftController = require("../controllers/shiftController");

router.get("/schedule", shiftController.getShiftSchedule);
router.get("/incomplete", shiftController.getIncompleteShiftEmployees);
router.get("/change-requests", shiftController.getShiftChangeRequests);

module.exports = router;
