const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "job_system"
});

db.connect((err) => {
    if (err) {
        console.log("Lỗi kết nối MySQL:", err);
    } else {
        console.log("Kết nối MySQL thành công");
    }
});

module.exports = db;