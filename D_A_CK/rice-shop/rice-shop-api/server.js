const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
require("dotenv").config(); 

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Cấu hình kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",        
  database: "rice_shop"
});

// Kết nối DB
db.connect(err => {
  if (err) {
    console.error("Kết nối MySQL thất bại:", err);
    return;
  }
  console.log(" Kết nối MySQL thành công");
});

const sqlConfig = {
  user: "sa",
  password: "123456",
  database: "rice_shop_sql",
  server: "localhost",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

//kết nối SQL server
const sqlConfig = {
  user: "sa",
  password: "123456",
  database: "rice_shop_sql",
  server: "localhost",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};
sql.connect(sqlConfig)
  .then(() => console.log("Kết nối SQL Server thành công"))
  .catch(err => console.error(" Kết nối SQL Server thất bại:", err));

 //Kết nối SQL Server
const sqlConfig = {
  user: "sa",
  password: "123456",
  database: "rice_shop_sql",
  server: "localhost",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

// Khởi tạo kết nối SQL Server nếu cần
sql.connect(sqlConfig)
  .then(() => console.log("Kết nối SQL Server thành công"))
  .catch(err => console.error("Kết nối SQL Server thất bại:", err));

  // Lấy danh sách món ăn
app.get("/api/foods", (req, res) => {
  db.query("SELECT * FROM foods", (err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi truy vấn dữ liệu" });
    res.json(results);
  });
});

// Đăng ký
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Thiếu thông tin" });

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi truy vấn" });
    if (results.length > 0) return res.status(409).json({ error: "Email đã tồn tại" });

    db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err) => {
      if (err) return res.status(500).json({ error: "Lỗi đăng ký" });
      res.json({ message: "Đăng ký thành công", user: { email } });
    });
  });
});

// Đăng nhập
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi đăng nhập" });
    if (results.length === 0) return res.status(401).json({ error: "Sai thông tin đăng nhập" });

    res.json({ token: "mock-token", user: { email } });
  });
});

// Cập nhật giỏ hàng
app.post("/api/cart", (req, res) => {
  const { email, items } = req.body;
  if (!email || !items) return res.status(400).json({ error: "Thiếu thông tin" });

  db.query("DELETE FROM carts WHERE email = ?", [email], (err) => {
    if (err) return res.status(500).json({ error: "Lỗi khi xoá giỏ hàng cũ" });

    const values = items.map(item => [email, item.id, item.name, item.quantity]);
    db.query("INSERT INTO carts (email, food_id, food_name, quantity) VALUES ?", [values], (err) => {
      if (err) return res.status(500).json({ error: "Lỗi khi cập nhật giỏ hàng" });
      res.json({ message: "Cập nhật giỏ hàng thành công" });
    });
  });
});

// Lấy giỏ hàng
app.get("/api/cart/:email", (req, res) => {
  const email = decodeURIComponent(req.params.email);
  db.query("SELECT * FROM carts WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi truy vấn giỏ hàng" });
    res.json(results);
  });
});

// Đặt hàng
app.post("/api/order", (req, res) => {
  const { email, items } = req.body;
  if (!email || !items || items.length === 0) {
    return res.status(400).json({ error: "Thiếu thông tin đơn hàng" });
  }

  const orderId = Date.now();
  const createdAt = new Date();

  const values = items.map(item => [orderId, email, item.id, item.name, item.quantity, createdAt]);
  db.query(
    "INSERT INTO orders (order_id, email, food_id, food_name, quantity, created_at) VALUES ?",
    [values],
    (err) => {
      if (err) return res.status(500).json({ error: "Lỗi đặt hàng" });
      res.json({ message: "Đặt hàng thành công", orderId });
    }
  );
});

// Lịch sử đơn hàng
app.get("/api/history", (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ error: "Thiếu email" });

  db.query("SELECT * FROM orders WHERE email = ? ORDER BY created_at DESC", [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Lỗi truy vấn lịch sử" });
    res.json(results);
  });
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});