const express = require("express");
const router = express.Router();

const {
  getCurrentUser,
  updateProfile
} = require("../controllers/user.controllers");

const { checkForAuthentication } = require("../middleware/user");


router.get("/profile", checkForAuthentication, getCurrentUser);

router.patch(
  "/profile/update",
  checkForAuthentication,
  updateProfile
);

module.exports = router;