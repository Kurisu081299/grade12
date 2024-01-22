const userModel = require('../models/userModel');

const userController = {};

userController.getName = (req, res) => {
  // Call the model to get grade 12 data
  userModel.getName((error, grade11Data) => {
    if (error) {
      console.error("Error getting name data: ", error);
      return res.status(500).json({ message: "Error getting name data" });
    }

    return res.status(200).json({ message: "name data retrieved", data: grade11Data });
  });
};
userController.postUserData = (req, res) => {
  const{name,age}= req.body;
  if(!name|| !age){
    return res.status(400).json({message: "Missing required fields"});
  }
  userModel.postUserData({name,age},(error,result)=>{
    if (error){
      console.error("Error posting user data:",error);
      return res.status(500).json({message:"Error posting user data"});
    }
    return res.status(201).json({message:"User data posted seccessfully",data: result});
    });
  }

  
module.exports = userController;

