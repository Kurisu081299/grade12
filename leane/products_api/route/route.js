const express = require('express');
const router = express.Router();
const userControllers = require('../controller/controller');

// List of Stories
router.get("/get", userControllers.getproduct_db);
router.post("/post", userControllers.postproduct_db);
router.put("/put", userControllers.putproduct_db);
router.delete("/del", userControllers.deleteproduct_db);

module.exports = router;