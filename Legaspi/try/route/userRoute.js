const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

router.get("/get", userControllers.getGrade11Data);
  router.get("/name", userControllers.getName);

module.exports = router;