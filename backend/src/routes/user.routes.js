const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  createRestaurant,
  getMyRestaurants,
  deleteCard,
  getAllRestaurants,
  viewDetails,
  bookRestaurant,
  getBookings,
  getOwnerBookings,
  updateBookingStatus,
  logout,
  getCurrentUser,
  getRestaurantById,
  updateRestaurant,
  updateProfile
} = require("../controllers/user.controllers");
const { checkForAuthentication } = require("../middleware/user");
const upload = require("../middleware/upload.middleware");
const { checkForAdmin } = require("../middleware/admin");
const {
  getAllUsersAdmin,
  getAllBookingsAdmin,
  getAllRestaurantsAdmin,
  getDashboardStats,
  deleteRestaurantAdmin,
  deleteUserAdmin,
} = require("../controllers/admin.controller");
const { checkForOwner } = require("../middleware/owner");

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post(
  "/restaurant",
  checkForAuthentication,
  checkForOwner,
  upload.single("restaurantImage"),
  createRestaurant,
);
router.get("/my-restaurants", checkForAuthentication , checkForOwner, getMyRestaurants);
router.delete("/my-restaurants/delete/:id", checkForAuthentication,checkForOwner ,deleteCard);
router.get("/my-restaurants/:id",checkForAuthentication,checkForOwner,getRestaurantById);
router.patch("/my-restaurant/update/:id",checkForAuthentication,checkForOwner,upload.single("restaurantImage"),updateRestaurant);
router.get("/restaurants", getAllRestaurants);
router.get("/restaurants/:id", viewDetails);
router.post("/bookings", checkForAuthentication, bookRestaurant);
router.get("/myBookings", checkForAuthentication, getBookings);
router.get("/ownerBookings", checkForAuthentication, checkForOwner,getOwnerBookings);
router.patch("/ownerBookings/:id", checkForAuthentication, checkForOwner,updateBookingStatus);
router.post("/logout", checkForAuthentication, logout);
router.get("/profile",checkForAuthentication,getCurrentUser);
router.patch("/profile/update",checkForAuthentication,updateProfile);

module.exports = router;
