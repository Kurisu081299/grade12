const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// List of Stories
router.get("/get", userControllers.getProductData);
router.post("/post", userControllers.postProductData);
router.put("/put", userControllers.putProductData);
router.delete("/del", userControllers.deleteProductData);

module.exports = router;