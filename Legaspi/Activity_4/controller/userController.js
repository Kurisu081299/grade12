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

module.exports = userController;
