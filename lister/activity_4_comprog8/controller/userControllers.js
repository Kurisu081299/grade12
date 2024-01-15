const userModels = require('../model/userModels');

const userController = {};

userController.getGrade12Data = (req, res) => {
  // Call the model to get grade 12 data
  userModels.getGrade12Data((error, grade12Data) => {
    if (error) {
      console.error("Error getting grade 12 data: ", error);
      return res.status(500).json({ message: "Error getting grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: grade12Data });
  });
};

userController.postUserData = (req,res) => {
    const{name,age,address,phone} = req.body;

    //Validation - chech if all required fields are provided
    if (!name || !age || !address || !phone) {
        return res.status (400).json({message: "Missing required fields"});
    }

    // Call the model to insert user data
    userModels.postUserData({ name,age,address,phone}, (error,result) => {
        if (error) {
            console.error("Error psoting user data:" ,error);
            return res.status(500).json({message: "Error posting user data"});
        }

        return res.status(201).json({message: "User data posted successfully", data: result})
    });
};
module.exports = userController;