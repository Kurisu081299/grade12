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

module.exports = userController;