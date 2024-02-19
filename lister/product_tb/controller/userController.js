const userModel = require('../model/userModel');

const userController = {};

userController.getProduct = (req, res) => {
  // Call the model to get product 
  userModel.getProduct((error, product) => {
    if (error) {
      console.error("Error getting product : ", error);
      return res.status(500).json({ message: "Error getting product" });
    }

    return res.status(200).json({ message: "Product  retrieved", data: product });
  });
};

userController.postProduct = (req, res) => {
  const { name, description, price} = req.body;

  // Check if required fields are provided
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Please provide name, description, and price" });
  }

  const data = { name, description, price };

  // Call the model to insert product
  userModel.insertProduct(data, (error, result) => {
    if (error) {
      console.error("Error inserting product : ", error);
      return res.status(500).json({ message: "Error inserting product " });
    }

    return res.status(200).json({ message: "Product  inserted successfully" });
  });
};

userController.putProduct = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { name, description, price } = req.body;

  // Check if required fields are provided
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Please provide name, description, and price" });
  }

  const data = { name, description, price };

  // Call the model to update product 
  userModel.updateProduct(id, data, (error, result) => {
    if (error) {
      console.error("Error updating product : ", error);
      return res.status(500).json({ message: "Error updating product " });
    }

    return res.status(200).json({ message: "Product  updated successfully" });
  });
};

// Delete Product
userController.deleteProduct = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deleteProduct(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting product : ", error);
      return res.status(500).json({ message: "Error deleting product " });
    }

    return res.status(200).json({ message: "Product deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;
