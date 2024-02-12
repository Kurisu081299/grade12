const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getProductData = (callback) => {
  dbConn.query("SELECT * FROM product_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving Product data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.insertProductData = (data, callback) => {
  dbConn.query("INSERT INTO product_tb (name, description, price) VALUES (?, ?, ?)", [data.name, data.description, data.price], (error, result) => {
    if (error) {
      console.error("Error inserting Product data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.updateProductData = (id, data, callback) => {
  dbConn.query(
    "UPDATE product_tb SET name=?, description=?, price=? WHERE id=?",
    [data.name, data.description, data.price, id],
    (error, result) => {
      if (error) {
        console.error("Error updating Product data: ", error);
        return callback(error, null);
      }

      return callback(null, result);
    }
  );
};

UserModel.deleteProductData = (idsToDelete, callback) => {
  const query = "DELETE FROM product_tb WHERE id = ?";

  dbConn.query(query, [idsToDelete], (error, result) => {
    if (error) {
      console.error("Error deleting Product data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
//

module.exports = UserModel;
