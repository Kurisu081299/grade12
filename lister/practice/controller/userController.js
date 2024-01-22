const userModels = require('../model/userModel');

const userController = {};

userController.getPracticeData = (req, res) => {
  // Call the model to get practice
  userModels.getPracticeData((error, practiceData) => {
    if (error) {
      console.error("Error getting practice data: ", error);
      return res.status(500).json({ message: "Error getting practice data" });
    }

    return res.status(200).json({ message: "practice data retrieved", data: practiceData });
  });
};
module.exports = userController;