const userModel = require('../model/userModel');

const userController = {};

userController.getProductData = (req, res) => {
  // Call the model to get Product data
  userModel.getProductData((error, ProductData) => {
    if (error) {
      console.error("Error getting Product data: ", error);
      return res.status(500).json({ message: "Error getting Product data" });
    }

    return res.status(200).json({ message: "Product data retrieved", data: ProductData });
  });
};

userController.postProductData = (req, res) => {
  const { name, description, price } = req.body;

  // Check if required fields are provided
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { name, description, price };

  // Call the model to insert Product data
  userModel.insertProductData(data, (error, result) => {
    if (error) {
      console.error("Error inserting Product data: ", error);
      return res.status(500).json({ message: "Error inserting Product data" });
    }

    return res.status(200).json({ message: "Product data inserted successfully" });
  });
};

userController.putProductData = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { name, description, price } = req.body;

  // Check if required fields are provided
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Please provide name, age, and address" });
  }

  const data = { name, description, price };

  // Call the model to update Product data
  userModel.updateProductData(id, data, (error, result) => {
    if (error) {
      console.error("Error updating Product data: ", error);
      return res.status(500).json({ message: "Error updating Product data" });
    }

    return res.status(200).json({ message: "Product data updated successfully" });
  });
};

// Delete Product Data
userController.deleteProductData = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deleteProductData(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting Product data: ", error);
      return res.status(500).json({ message: "Error deleting Product data" });
    }

    return res.status(200).json({ message: "Product data deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;
