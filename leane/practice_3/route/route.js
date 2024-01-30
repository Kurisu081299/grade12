const express=require('express');
const router=express.Router();
const controllers=require('../controller/controller',)


router.get("/get", controllers.getpractice_3);
router.post("/post", controllers.postpractice_3);
router.put("/put", controllers.putpractice_3);
module.exports = router;