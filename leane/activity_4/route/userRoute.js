const express=require('express');
const router=express.Router();
const userControllers=require('../controller/userController',)


router.get("/get", userControllers.getGrade12Data);
module.exports = router;