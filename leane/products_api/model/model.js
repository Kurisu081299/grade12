const dbConn = require("../config/config");

const model = {};

model.getproduct_db = (callback) => {
  dbConn.query("SELECT * FROM table_name", (error, result) => {
    if (error) {
      console.error("Error retrieving grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

model.insertproduct_db = (data, callback) => {
  dbConn.query("INSERT INTO table_name (name, description, price) VALUES (?, ?, ?)", [data.name, data.description, data.price], (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

model.updateproduct_db = (id, data, callback) => {
  dbConn.query(
    "UPDATE table_name SET name=?, description=?, price=? WHERE id=?",
    [data.name, data.description, data.price, id],
    (error, result) => {
      if (error) {
        console.error("Error updating grade 11 data: ", error);
        return callback(error, null);
      }

      return callback(null, result);
    }
  );
};

model.deleteproduct_db = (idsToDelete, callback) => {
  const query = "DELETE FROM table_name WHERE id = ?";

  dbConn.query(query, [idsToDelete], (error, result) => {
    if (error) {
      console.error("Error deleting grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


module.exports = model;
