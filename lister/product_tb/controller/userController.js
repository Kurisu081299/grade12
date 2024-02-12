const userModel = require('../model/userModel');

const userController = {};

userController.getProduct_tb = (req, res) => {
  // Call the model to get product_tb 
  userModel.getproduct_tb((error, product_tb) => {
    if (error) {
      console.error("Error getting product_tb : ", error);
      return res.status(500).json({ message: "Error getting product_tb " });
    }

    return res.status(200).json({ message: "Product_tb  retrieved", data: product_tb });
  });
};

userController.postProduct_tb = (req, res) => {
  const { name, age, address } = req.body;

  // Check if required fields are provided
  if (!name || !age || !address) {
    return res.status(400).json({ message: "Please provide name, description, and price" });
  }

  const data = { name, description, price };

  // Call the model to insert product_tb
  userModel.insertProduct_tb(data, (error, result) => {
    if (error) {
      console.error("Error inserting product_tb : ", error);
      return res.status(500).json({ message: "Error inserting product_tb " });
    }

    return res.status(200).json({ message: "Product_tb  inserted successfully" });
  });
};

userController.putProduct_tb = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { name, description, price } = req.body;

  // Check if required fields are provided
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Please provide name, description, and price" });
  }

  const data = { name, description, price };

  // Call the model to update product_tb 
  userModel.updateProduct_tb(id, data, (error, result) => {
    if (error) {
      console.error("Error updating product_tb : ", error);
      return res.status(500).json({ message: "Error updating product_tb " });
    }

    return res.status(200).json({ message: "Product_tb  updated successfully" });
  });
};

// Delete Product_tb 
userController.deleteProduct_tb = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deleteProduct_tb(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting product_tb : ", error);
      return res.status(500).json({ message: "Error deleting product_tb " });
    }

    return res.status(200).json({ message: "Product_tb deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;
