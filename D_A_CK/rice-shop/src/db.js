const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",       
  database: "rice_shop"
});

connection.connect((err) => {
  if (err) {
    console.error("Kết nối MySQL thất bại:", err);
    return;
  }
  console.log("Đã kết nối MySQL thành công.");
});

module.exports = connection;