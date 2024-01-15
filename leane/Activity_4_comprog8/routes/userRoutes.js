const express=require('express');
const router=express.Router();
const userControllers=require('../controllers/userControllers',)


router.get("/", userControllers.getGrade12Data);
router.post("/post", userControllers.postUserData)
module.exports = router;