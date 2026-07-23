const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getAllUsersAdmin,
  getAllBookingsAdmin,
  getAllRestaurantsAdmin,
  deleteRestaurantAdmin,
  deleteUserAdmin,
} = require("../controllers/admin.controller");

const { checkForAuthentication } = require("../middleware/user");
const { checkForAdmin } = require("../middleware/admin");

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