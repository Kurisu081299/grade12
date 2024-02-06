const userModel = require('../model/userModel');

const userController = {};

userController.getUserData = (req, res) => {
  const { username } = req.query;

  // Call the model to get user data based on username
  userModel.getUserData(username, (error, userData) => {
    if (error) {
      console.error("Error getting user data: ", error);
      return res.status(500).json({ message: "Error getting user data" });
    }

    return res.status(200).json({ message: "User data retrieved", data: userData });
  });
};


userController.postUserData = (req, res) => {
  const { username, password} = req.body;

  // Check if required fields are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username & password" });
  }

  const data = { username, password };

  // Call the model to insert grade 11 data
  userModel.insertUserData(data, (error, result) => {
    if (error) {
      console.error("Error inserting User data: ", error);
      return res.status(500).json({ message: "Error inserting User data" });
    }

    return res.status(200).json({ message: "User registered successfully" });
  });
};

userController.loginUserData = (req, res) => {
  const { username, password } = req.body;

  // Check if required fields are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username & password" });
  }

  userModel.checkUserCredentials(username, password, (error, result) => {
    if (error) {
      console.error("Error checking user credentials: ", error);
      return res.status(500).json({ message: "Error checking user credentials" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Extract username from the result
    const userData = result[0];
    const loggedInUser = {
      id: userData.id,
      username: userData.username
    };

    return res.status(200).json({ message: "Login successful", user: loggedInUser });
  });
};


// userController.putGrade11Data = (req, res) => {
//   const { id } = req.body; // Get id from URL params
//   const { name, age, address } = req.body;

//   // Check if required fields are provided
//   if (!name || !age || !address) {
//     return res.status(400).json({ message: "Please provide name, age, and address" });
//   }

//   const data = { name, age, address };

//   // Call the model to update grade 11 data
//   userModel.updateGrade11Data(id, data, (error, result) => {
//     if (error) {
//       console.error("Error updating grade 11 data: ", error);
//       return res.status(500).json({ message: "Error updating grade 11 data" });
//     }

//     return res.status(200).json({ message: "Grade 11 data updated successfully" });
//   });
// };

// // Delete Grade 11 Data
// userController.deleteGrade11Data = (req, res) => {
//   const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

//   if (!idsToDelete) {
//     return res.status(400).json({ message: "ID to delete are required in the request body" });
//   }

//   userModel.deleteGrade11Data(idsToDelete, (error, result) => {
//     if (error) {
//       console.error("Error deleting grade 11 data: ", error);
//       return res.status(500).json({ message: "Error deleting grade 11 data" });
//     }

//     return res.status(200).json({ message: "Grade 11 data deleted successfully", deletedCount: result.affectedRows });
//   });
// };

module.exports = userController;
