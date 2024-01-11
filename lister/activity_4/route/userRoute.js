const express = require('express');
const router=express.Router();
const userControllers=require('../controller/userController');

// List of stories
router.get("/get", userControllers.getGrade11Data);

module.exports=router;