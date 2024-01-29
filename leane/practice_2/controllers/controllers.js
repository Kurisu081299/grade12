const model = require('../model/model');

const controllers = {};

controllers.getpractice_2 = (req, res) => {
  // Call the model to get grade 12 data
  model.getpractice_2((error, practice_2) => {
    if (error) {
      console.error("Error getting practice_1 data: ", error);
      return res.status(500).json({ message: "Error getting grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: practice_2 });
  });
};
controllers.postpractice_2 = (req, res) => {
  const { name,grade, age, section } = req.body;

  // Check if required fields are provided
  if (!name || !age || !grade ||!section) {
    return res.status(400).json({ message: "Please provide name, age, and address,pls provide rightful information" });
  }

  const data = {  name,grade, age, section };

  // Call the model to insert grade 11 data
  model.insertpractice_2(data, (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return res.status(500).json({ message: "Error inserting grade 11 data" });
    }

    return res.status(200).json({ message: "practice_2 data inserted successfully" });
  });
};
module.exports = controllers;
