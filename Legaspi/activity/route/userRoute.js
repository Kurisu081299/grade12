const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// List of Stories
router.get("/get", userControllers.getAct);
router.post("/post", userControllers.postAct);

module.exports = router;