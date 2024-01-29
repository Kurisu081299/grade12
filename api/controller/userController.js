const userModel = require('../model/userModel');

const userController = {};

userController.getGrade11Data = (req, res) => {
  // Call the model to get grade 11 data
  userModel.getGrade11Data((error, grade11Data) => {
    if (error) {
      console.error("Error getting grade 11 data: ", error);
      return res.status(500).json({ message: "Error getting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data retrieved", data: grade11Data });
  });
};

userController.postGrade11Data = (req, res) => {
  const { name, age, address } = req.body;

  // Check if required fields are provided
  if (!name || !age || !address) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { name, age, address };

  // Call the model to insert grade 11 data
  userModel.insertGrade11Data(data, (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return res.status(500).json({ message: "Error inserting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data inserted successfully" });
  });
};

module.exports = userController;
