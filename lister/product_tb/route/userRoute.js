const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// List of Stories
router.get("/get", userController.getProduct);
router.post("/post", userController.postProduct);
router.put("/put", userController.putProduct);
router.delete("/del", userController.deleteProduct);

module.exports = router;