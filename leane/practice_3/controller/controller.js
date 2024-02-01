const model = require('../model/model');

const controllers = {};

controllers.getpractice_3 = (req, res) => {
  // Call the model to get grade 12 data
  model.getpractice_3((error, practice_2) => {
    if (error) {
      console.error("Error getting practice_1 data: ", error);
      return res.status(500).json({ message: "Error getting grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: practice_2 });
  });
};
controllers.postpractice_3 = (req, res) => {
  const { name,address, crush,age } = req.body;

  // Check if required fields are provided
  if (!name || !address || !crush ||!age) {
    return res.status(400).json({ message: "Please provide name, age, and address,pls provide rightful information" });
  }

  const data = {  name,address, crush, age };

  // Call the model to insert grade 11 data
  model.insertpractice_3(data, (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return res.status(500).json({ message: "Error inserting grade 11 data" });
    }

    return res.status(200).json({ message: "practice_2 data inserted successfully" });
  });
};
controllers.putpractice_3 = (req, res) => {
    const { id } = req.body; // Get id from URL params
    const { name, age, address,crush } = req.body;
  
    // Check if required fields are provided
    if (!name || !age || !address ||!crush) {
      return res.status(400).json({ message: "Please provide name, age, and address" });
    }
  
    const data = { name, age, address,crush };
  
    // Call the model to update grade 11 data
    model.updatepractice_3(id, data, (error, result) => {
      if (error) {
        console.error("Error updating grade 11 data: ", error);
        return res.status(500).json({ message: "Error updating grade 11 data" });
      }
  
      return res.status(200).json({ message: "Grade 11 data updated successfully" });
    });
  };
module.exports = controllers;
