const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get("/try2", userController.getTry2);
router.post("/post", userController.postTry2);

module.exports = router;