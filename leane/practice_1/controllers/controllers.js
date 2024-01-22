const model = require('../model/model');

const controllers = {};

controllers.getpractice_1 = (req, res) => {
  // Call the model to get grade 12 data
  model.getpractice_1((error, practice_1) => {
    if (error) {
      console.error("Error getting practice_1 data: ", error);
      return res.status(500).json({ message: "Error getting grade 12 data" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: practice_1 });
  });
};

module.exports = controllers;
