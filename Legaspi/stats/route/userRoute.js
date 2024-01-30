const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

router.get("/get", userControllers.getGrade11Data);
router.get("/stats", userControllers.getStats);
router.post("/stats2", userControllers.postStats2);
router.put("/put", userControllers.putStats2);

module.exports = router;