const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController',)


router.get("/", userController.getName);
router.post("/post", userController.postUserData)
module.exports = router;