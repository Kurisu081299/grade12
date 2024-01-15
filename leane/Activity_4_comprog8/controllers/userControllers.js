const userModel = require('../models/userModels');

const userController = {};

userController.getGrade12Data = (req, res) => {
  // Call the model to get grade 12 data
  userModel.getGrade12Data((error, grade11Data) => {
    if (error) {
      console.error("Error getting grade 12 data: ", error);
      return res.status(500).json({ message: "Error getting grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: grade11Data });
  });
};
userController.postUserData = (req, res) => {
  const{name,age,address,phone}= req.body;
  if(!name|| !age|| !address|| !phone){
    return res.status(400).json({message: "Missing required fields"});
  }
  userModel.postUserData({name,age,address,phone},(error,result)=>{
    if (error){
      console.error("Error posting user data:",error);
      return res.status(500).json({message:"Error posting user data"});
    }
    return res.status(201).json({message:"User data posted seccessfully",data: result});
    });
  }

  
module.exports = userController;

