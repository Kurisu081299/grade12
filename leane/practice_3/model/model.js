const connection = require("../config/config");

const model = {};

model.getpractice_3 = (callback) => {
  connection.query("SELECT * FROM practice_3", (error, result) => {
    if (error) {
      console.error("Error retrieving oractice_2: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
model.insertpractice_3 = (data, callback) => {
  connection.query("INSERT INTO practice_3 (name, address,crush,age) VALUES (?, ?, ?,?)", [data.name, data.address, data.crush, data.age], (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
model.updatepractice_3 = (id, data, callback) => {
    connection.query(
      "UPDATE practice_3 SET name=?, address=?, crush=?, age=? WHERE id=?",
      [data.name, data.address, data.crush, data.age, id],
      (error, result) => {
        if (error) {
          console.error("Error updating grade 11 data: ", error);
          return callback(error, null);
        }
  
        return callback(null, result);
      }
    );
  };
  

module.exports = model;
