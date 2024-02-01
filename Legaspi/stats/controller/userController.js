const userModel = require('../model/userModel');

const userController = {};

userController.getGrade11Data = (req, res) => {

  userModel.getGrade11Data((error, grade11Data) => {
    if (error) {
      console.error("Error getting grade 11 data: ", error);
      return res.status(500).json({ message: "Error getting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data retrieved", data: grade11Data });
  });
};

userController.getStats = (req, res) => {

    userModel.getStats((error, grade11Data) => {
      if (error) {
        console.error("Error getting grade 11 data: ", error);
        return res.status(500).json({ message: "Error getting grade 11 data" });
      }
  
      return res.status(200).json({ message: "Grade 11 data retrieved", data: grade11Data });
    });
  };

  userController.postStats2 = (req, res) => {
    const {name, age} = req.body;
  
    // Check if required fields are provided
    if (!name || !age) {
      return res.status(400).json({ message: "Please provide name, age" });
    }
  
    const data = { name, age};
  
    // Call the model to insert grade 11 data
    userModel.insertStats2(data, (error, result) => {
      if (error) {
        console.error("Error inserting grade 11 data: ", error);
        return res.status(500).json({ message: "Error inserting Name data" });
      }
  
      return res.status(200).json({ message: "Name data inserted successfully" });
    });
  };

  userController.putStats2 = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const { name, age} = req.body;
  
    // Check if required fields are provided
    if (!name || !age) {
      return res.status(400).json({ message: "Please provide name, age" });
    }
  
    const data = { name, age };
  
    // Call the model to update grade 11 data
    userModel.updateStats2(id, data, (error, result) => {
      if (error) {
        console.error("Error updating grade 11 data: ", error);
        return res.status(500).json({ message: "Error updating stats data" });
      }
  
      return res.status(200).json({ message: "Stats data updated successfully" });
    });
  };
  
module.exports = userController;