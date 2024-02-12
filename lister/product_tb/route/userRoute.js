const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// List of Stories
router.get("/get", userController.getProduct_tb);
router.post("/post", userController.postProduct_tb);
router.put("/put", userController.putProduct_tb);
router.delete("/del", userController.deleteProduct_tb);

module.exports = router;