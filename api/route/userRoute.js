const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// List of Stories
router.get("/get", userControllers.getGrade11Data);
router.post("/post", userControllers.postGrade11Data);

module.exports = router;