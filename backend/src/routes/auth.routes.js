const express = require("express");
const router = express.Router();

const {
    createUser,
    loginUser,
    logout} = require('../controllers/auth.controller');
    
const {checkForAuthentication} = require('../middleware/user');

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/logout", checkForAuthentication, logout);

module.exports = router;