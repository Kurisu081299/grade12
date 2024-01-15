const express = require('express');
const router=express.Router();
const userControllers=require('../controller/userControllers');

// List of stories
router.get("/", userControllers.getGrade12Data);
router.post("/post", userControllers.postUserData);
module.exports=router;