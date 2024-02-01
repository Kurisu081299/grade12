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

userController.getBase = (req, res) => {

    userModel.getBase((error, grade11Data) => {
      if (error) {
        console.error("Error getting base data: ", error);
        return res.status(500).json({ message: "Error getting base data" });
      }
  
      return res.status(200).json({ message: "Base data retrieved", data: grade11Data });
    });
  };

  userController.postBase = (req, res) => {
    const {name, age} = req.body;
  
    // Check if required fields are provided
    if (!name || !age) {
      return res.status(400).json({ message: "Please provide name, age" });
    }
  
    const data = { name, age};
  
    // Call the model to insert grade 11 data
    userModel.insertBase(data, (error, result) => {
      if (error) {
        console.error("Error inserting grade 11 data: ", error);
        return res.status(500).json({ message: "Error inserting Base data" });
      }
  
      return res.status(200).json({ message: "Base data inserted successfully" });
    });
  };

  userController.putBase = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const { name, age} = req.body;
  
    // Check if required fields are provided
    if (!name || !age) {
      return res.status(400).json({ message: "Please provide name, age" });
    }
  
    const data = { name, age };
  
    // Call the model to update grade 11 data
    userModel.updateBase(id, data, (error, result) => {
      if (error) {
        console.error("Error updating base data: ", error);
        return res.status(500).json({ message: "Error updating base data" });
      }
  
      return res.status(200).json({ message: "Base data updated successfully" });
    });
  };
  
  // Delete Grade 11 Data
userController.deleteBase = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deleteBase(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting base data: ", error);
      return res.status(500).json({ message: "Error deleting base data" });
    }

    return res.status(200).json({ message: "Base data deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;