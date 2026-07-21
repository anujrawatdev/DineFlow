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

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post(
  "/restaurant",
  checkForAuthentication,
  upload.single("restaurantImage"),
  createRestaurant,
);
router.get("/my-restaurants", checkForAuthentication, getMyRestaurants);
router.delete("/my-restaurants/delete/:id", checkForAuthentication, deleteCard);
router.get("/restaurants", getAllRestaurants);
router.get("/restaurants/:id", viewDetails);
router.post("/bookings", checkForAuthentication, bookRestaurant);
router.get("/myBookings", checkForAuthentication, getBookings);
router.get("/ownerBookings", checkForAuthentication, getOwnerBookings);
router.patch("/ownerBookings/:id", checkForAuthentication, updateBookingStatus);
router.post("/logout", checkForAuthentication, logout);
router.get(
  "/admin/dashboard",
  checkForAuthentication,
  checkForAdmin,
  getDashboardStats,
);
router.get(
  "/admin/users",
  checkForAuthentication,
  checkForAdmin,
  getAllUsersAdmin,
);
router.get(
  "/admin/bookings",
  checkForAuthentication,
  checkForAdmin,
  getAllBookingsAdmin,
);
router.get(
  "/admin/restaurants",
  checkForAuthentication,
  checkForAdmin,
  getAllRestaurantsAdmin,
);
router.delete(
  "/admin/restaurants/:id",
  checkForAuthentication,
  checkForAdmin,
  deleteRestaurantAdmin,
);
router.delete(
  "/admin/users/:id",
  checkForAuthentication,
  checkForAdmin,
  deleteUserAdmin,
);
module.exports = router;
