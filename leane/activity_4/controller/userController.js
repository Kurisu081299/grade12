const userModel = require('../model/userModel');

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

module.exports = userController;
