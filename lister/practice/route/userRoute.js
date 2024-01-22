const express = require('express');
const router=express.Router();
const userControllers=require('../controller/userController');

// List of stories
router.get("/", userControllers.getPracticeData);
module.exports=router;