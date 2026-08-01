const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getAllUsersAdmin,
  getAllBookingsAdmin,
  getAllRestaurantsAdmin,
  deleteRestaurantAdmin,
  deleteUserAdmin,
  getAllOwnerRequests,
  updateOwnerRequestStatus
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
  "/admin/restaurants/:id/delete",
  checkForAuthentication,
  checkForAdmin,
  deleteRestaurantAdmin,
);
router.delete(
  "/admin/users/:id/delete",
  checkForAuthentication,
  checkForAdmin,
  deleteUserAdmin,
);
router.get(
  "/admin/owner-requests",
  checkForAuthentication,
  checkForAdmin,
  getAllOwnerRequests,
);
router.patch("/admin/owner-request/:id",
  checkForAuthentication,
  checkForAdmin,
  updateOwnerRequestStatus);
module.exports = router;
