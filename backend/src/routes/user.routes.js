const express = require('express');
const router = express.Router();

const { createUser,loginUser ,createRestaurant,getMyRestaurants ,deleteCard,getAllRestaurants,viewDetails} = require('../controllers/user.controllers');
const {checkForAuthentication} = require('../middleware/user');
const upload = require('../middleware/upload.middleware');

router.post("/signup",createUser);
router.post("/login",loginUser);
router.post(
    "/restaurant",
     checkForAuthentication,
     upload.single("restaurantImage"),
     createRestaurant);
router.get("/my-restaurants",checkForAuthentication,getMyRestaurants);
router.delete("/my-restaurants/delete/:id",checkForAuthentication,deleteCard);
router.get("/restaurants",getAllRestaurants);
router.get("/restaurants/:id",viewDetails);

module.exports = router;