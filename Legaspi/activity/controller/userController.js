const userModel = require('../model/userModel');

const userController = {};

userController.getAct = (req, res) => {
  // Call the model to get grade 11 data
  userModel.getAct((error, grade11Data) => {
    if (error) {
      console.error("Error getting grade 11 data: ", error);
      return res.status(500).json({ message: "Error getting users data" });
    }

    return res.status(200).json({ message: "users data retrieved", data: grade11Data });
  });
};

userController.postAct = (req, res) => {
  const { username, password} = req.body;

  // Check if required fields are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide name, password" });
  }

  const data = { username, password};

  // Call the model to insert grade 11 data
  userModel.insertAct(data, (error, result) => {
    if (error) {
      console.error("Error inserting users data: ", error);
      return res.status(500).json({ message: "Error inserting users data" });
    }

    return res.status(200).json({ message: "users data inserted successfully" });
  });
};


module.exports = userController;