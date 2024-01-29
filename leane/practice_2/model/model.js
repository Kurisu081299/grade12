const connection = require("../configs/configs");

const model = {};

model.getpractice_2 = (callback) => {
  connection.query("SELECT * FROM oractice_2", (error, result) => {
    if (error) {
      console.error("Error retrieving oractice_2: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};
model.insertpractice_2 = (data, callback) => {
  connection.query("INSERT INTO oractice_2 (name, grade,section,age) VALUES (?, ?, ?,?)", [data.name, data.grade, data.section, data.age], (error, result) => {
    if (error) {
      console.error("Error inserting grade 11 data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

module.exports = model;
