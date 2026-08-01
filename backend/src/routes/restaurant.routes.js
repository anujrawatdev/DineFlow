const express = require("express");
const router = express.Router();

const {
  createRestaurant,
  getMyRestaurants,
  deleteCard,
  getAllRestaurants,
  viewDetails,
  getRestaurantById,
  updateRestaurant,
} = require("../controllers/restaurant.controller");

const { checkForAuthentication } = require("../middleware/user");
const { checkForOwner } = require("../middleware/owner");
const upload = require("../middleware/upload.middleware");

router.post(
  "/restaurant",
  checkForAuthentication,
  checkForOwner,
  upload.single("restaurantImage"),
  createRestaurant,
);
router.get(
  "/my-restaurants",
  checkForAuthentication,
  checkForOwner,
  getMyRestaurants,
);
router.delete(
  "/my-restaurants/delete/:id",
  checkForAuthentication,
  checkForOwner,
  deleteCard,
);
router.get(
  "/my-restaurants/:id",
  checkForAuthentication,
  checkForOwner,
  getRestaurantById,
);
router.get("/restaurants", getAllRestaurants);
router.get("/restaurants/:id", viewDetails);

router.patch(
  "/my-restaurant/update/:id",
  checkForAuthentication,
  checkForOwner,
  upload.single("restaurantImage"),
  updateRestaurant,
);

module.exports = router;
