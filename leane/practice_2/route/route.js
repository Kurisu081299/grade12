const express=require('express');
const router=express.Router();
const controllers=require('../controllers/controllers',)


router.get("/get", controllers.getpractice_2);
router.post("/post", controllers.postpractice_2);
module.exports = router;