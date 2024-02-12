const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getProduct_tb = (callback) => {
  dbConn.query("SELECT * FROM Product_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving product_tb data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.insertProduct_tb = (data, callback) => {
  dbConn.query("INSERT INTO product_tb (name, description, price) VALUES (?, ?, ?)", [data.name, data.description, data.price], (error, result) => {
    if (error) {
      console.error("Error inserting product_tb data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.updateProduct_tb = (id, data, callback) => {
  dbConn.query(
    "UPDATE product_tb SET name=?, description=?, price=? WHERE id=?",
    [data.name, data.description, data.price, id],
    (error, result) => {
      if (error) {
        console.error("Error updating product_tb data: ", error);
        return callback(error, null);
      }

      return callback(null, result);
    }
  );
};

UserModel.deleteProduct_tb = (idsToDelete, callback) => {
  const query = "DELETE FROM product_tb WHERE id = ?";

  dbConn.query(query, [idsToDelete], (error, result) => {
    if (error) {
      console.error("Error deleting product_tb data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


module.exports = UserModel;
