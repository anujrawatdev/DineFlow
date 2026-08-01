const express = require("express");
const router = express.Router();

const { checkForAuthentication } = require("../middleware/user");
const { createOwner, approveOwnerRequest, rejectOwnerRequest } = require("../controllers/owner.controller");
const { checkForAdmin } = require("../middleware/admin");
const { updateOwnerRequestStatus, getAllOwnerRequests } = require("../controllers/admin.controller");
const {checkForOwner} = require('../middleware/owner');
const {getOwnerBookings,updateBookingStatus} = require('../controllers/booking.controller');


router.post("/owner-request", checkForAuthentication, createOwner);
router.patch("/admin/owner-request/:id",checkForAuthentication,checkForAdmin,updateOwnerRequestStatus);
router.get("/owner-requests",checkForAuthentication,checkForAdmin,getAllOwnerRequests);
router.patch("/owner-requests/:id/approve",checkForAuthentication,checkForAdmin,approveOwnerRequest);
router.patch("/owner-requests/:id/reject",checkForAuthentication,checkForAdmin,rejectOwnerRequest);
router.get("/ownerBookings", checkForAuthentication, checkForOwner,getOwnerBookings);
router.patch("/ownerBookings/:id", checkForAuthentication, checkForOwner,updateBookingStatus);

module.exports = router;
