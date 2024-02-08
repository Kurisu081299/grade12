const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');

// List of Stories

router.post("/login", controller.postactivty);
router.post("/signup",controller.signup)

module.exports = router;