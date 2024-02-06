const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// List of Stories

router.post("/login", controller.posthtml_db);
router.post("/signup",controller.signup)

module.exports = router;