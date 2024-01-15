const express = require('express');
const router=express.Router();
const userControllers=require('../controller/userControllers');

// List of stories
router.get("/get", userControllers.getGrade12Data);

module.exports=router;