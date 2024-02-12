const model = require('../model/model');

const controller = {};

controller.getproduct_db = (req, res) => {
  // Call the model to get grade 11 data
  model.getproduct_db((error, product_db) => {
    if (error) {
      console.error("Error getting product_db data: ", error);
      return res.status(500).json({ message: "Error getting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data retrieved", data: product_db });
  });
};

controller.postproduct_db = (req, res) => {
  const { name, description, price } = req.body;

  // Check if required fields are provided
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { name, description, price };

  // Call the model to insert grade 11 data
  model.insertproduct_db(data, (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return res.status(500).json({ message: "Error inserting product_db data" });
    }

    return res.status(200).json({ message: "Grade 11 data inserted successfully" });
  });
};

controller.putproduct_db = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { name, description, price } = req.body;

  // Check if required fields are provided
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { name, description, price };

  // Call the model to update grade 11 data
  model.updateproduct_db(id, data, (error, result) => {
    if (error) {
      console.error("Error updating grade 11 data: ", error);
      return res.status(500).json({ message: "Error updating grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data updated successfully" });
  });
};

// Delete Grade 11 Data
controller.deleteproduct_db = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  model.deleteproduct_db(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting grade 11 data: ", error);
      return res.status(500).json({ message: "Error deleting grade 11 data" });
    }

    return res.status(200).json({ message: "Grade 11 data deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = controller;
