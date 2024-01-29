const modelss = require('../modelss/modelss');

const controllers = {};

controllers.getpractice = (req, res) => {
  // Call the model to get grade 12 data
  modelss.getpractice((error, practice) => {
    if (error) {
      console.error("Error getting practice table: ", error);
      return res.status(500).json({ message: "Error getting practice table" });
    }

    return res.status(200).json({ message: "Grade 12 data retrieved", data: practice });
  });
};

module.exports=controllers;