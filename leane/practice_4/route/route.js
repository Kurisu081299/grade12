const express=require('express');
const router=express.Router();
const controller=require('../controller/controller',)


router.get("/get", controller.getpractice_4);
router.post("/post", controller.postpractice_4);
router.put("/put", controller.putpractice_4);
router.delete("/del", controller.deletepractice_4);
module.exports = router;