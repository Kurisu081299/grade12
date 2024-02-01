const connection = require("../config/config");

const model = {};

model.getpractice_4 = (callback) => {
  connection.query("SELECT * FROM practice_4", (error, result) => {
    if (error) {
      console.error("Error retrieving practice_4: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
model.insertpractice_4 = (data, callback) => {
  connection.query("INSERT INTO practice_3 (name, age,address,crush) VALUES (?, ?, ?,?)", [data.name, data.age, data.address, data.crush], (error, result) => {
    if (error) {
      console.error("Error inserting practice_4 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
model.updatepractice_4 = (id, data, callback) => {
    connection.query(
      "UPDATE practice_4 SET name=?, age=?, address=?, crush=? WHERE id=?",
      [data.name, data.age, data.address, data.crush, id],
      (error, result) => {
        if (error) {
          console.error("Error updating practice_4 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
  model.deletepractice_4 = (idsToDelete, callback) => {
    const query = "DELETE FROM practice_4 WHERE id = ?";
  
    connection.query(query, [idsToDelete], (error, result) => {
      if (error) {
        console.error("Error deleting practice_4 data: ", error);
        return callback(error, null);
      }
  
      return callback(null, result);
    });
  };
  

module.exports = model;
