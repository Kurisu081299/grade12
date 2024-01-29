const userModel = require('../model/userModel');

const userController = {};

userController.getTry2 = (req, res) => {

    userModel.getTry2((error, Try2) => {
      if (error) {
        console.error("Error getting grade 11 data: ", error);
        return res.status(500).json({ message: "Error getting grade 11 data" });
      }
  
      return res.status(200).json({ message: "Grade 11 data retrieved", data: Try2 });
    });
  };

  userController.postTry2 = (req, res) => {
    const { name, age} = req.body;
  
    // Check if required fields are provided
    if (!name || !age) {
      return res.status(400).json({ message: "Please provide name, age" });
    }
  
    const data = { name, age};
  
    // Call the model to insert grade 11 data
    userModel.insertTry2(data, (error, result) => {
      if (error) {
        console.error("Error inserting grade 11 data: ", error);
        return res.status(500).json({ message: "Error inserting Name data" });
      }
  
      return res.status(200).json({ message: "Name data inserted successfully" });
    });
  };
  
module.exports = userController;