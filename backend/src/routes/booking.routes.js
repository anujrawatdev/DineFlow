const express = require("express");
const router = express.Router();

const { 
    bookRestaurant,
    getBookings,
 } = require("../controllers/booking.controller");
 
const { checkForAuthentication } = require("../middleware/user");

router.post("/bookings", checkForAuthentication, bookRestaurant);
router.get("/myBookings", checkForAuthentication, getBookings);

module.exports = router;

