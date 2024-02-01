const model = require('../model/model');

const controllers = {};

controllers.getpractice_4 = (req, res) => {
  // Call the model to get grade 12 data
  model.getpractice_4((error, practice_4) => {
    if (error) {
      console.error("Error getting practice_4 data: ", error);
      return res.status(500).json({ message: "Error getting grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: practice_4 });
  });
};
controllers.postpractice_4 = (req, res) => {
  const { name,age,address,crush} = req.body;

  // Check if required fields are provided
  if (!name || !age || !address ||!crush) {
    return res.status(400).json({ message: "Please provide name, age, and address,pls provide rightful information" });
  }

  const data = {  name,age, address, crush };

  // Call the model to insert grade 11 data
  model.insertpractice_4(data, (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return res.status(500).json({ message: "Error inserting grade 11 data" });
    }

    return res.status(200).json({ message: "practice_2 data inserted successfully" });
  });
};
controllers.putpractice_4 = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const { name, address, crush,age } = req.body;
  
    // Check if required fields are provided
    if (!name || !address|| !crush ||!age) {
      return res.status(400).json({ message: "Please provide name, age, and address" });
    }
  
    const data = { name, address, crush,age };
  
    // Call the model to update grade 11 data
    model.updatepractice_4(id, data, (error, result) => {
      if (error) {
        console.error("Error updating grade 11 data: ", error);
        return res.status(500).json({ message: "Error updating grade 11 data" });
      }
  
      return res.status(200).json({ message: "Grade 11 data updated successfully" });
    });
  };
  controllers.deletepractice_4 = (req, res) => {
    const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids
  
    if (!idsToDelete) {
      return res.status(400).json({ message: "ID to delete are required in the request body" });
    }
  
    model.deletepractice_4(idsToDelete, (error, result) => {
      if (error) {
        console.error("Error deleting practice_4 data: ", error);
        return res.status(500).json({ message: "Error deleting grade 11 data" });
      }
  
      return res.status(200).json({ message: "practice _4 deleted successfully", deletedCount: result.affectedRows });
    });
  };
module.exports = controllers;
