const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

router.get("/get", userControllers.getGrade11Data);
router.get("/base", userControllers.getBase);
router.post("/post", userControllers.postBase);
router.put("/put", userControllers.putBase);
router.delete("/del", userControllers.deleteBase);

module.exports = router;