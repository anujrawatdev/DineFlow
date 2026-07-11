const express = require('express');
const router = express.Router();

const { createUser,loginUser ,createRestaurant} = require('../controllers/user.controllers');
const {checkForAuthentication} = require('../middleware/user');
const upload = require('../middleware/upload.middleware');

router.post("/signup",createUser);
router.post("/login",loginUser);
router.post(
    "/restaurant",
     checkForAuthentication,
     upload.single("restaurantImage"),
     createRestaurant);

module.exports = router;