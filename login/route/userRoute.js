const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// List of Stories
router.get("/get", userControllers.getUserData);
router.post("/signup", userControllers.postUserData);
router.post("/login", userControllers.loginUserData);
// router.put("/put", userControllers.putGrade11Data);
// router.delete("/del", userControllers.deleteGrade11Data);

module.exports = router;