const express=require('express');
const router=express.Router();
const controllers=require('../controllers/controllers',)


router.get("/get", controllers.getpractice_1);
module.exports = router;