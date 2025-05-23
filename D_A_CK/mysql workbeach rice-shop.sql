CREATE database rice_shop;
USE rice_shop;

-- Tạo bảng `users`
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Tạo bảng `foods`
CREATE TABLE foods (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

-- Tạo bảng `carts`
CREATE TABLE carts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  food_id INT NOT NULL,
  food_name VARCHAR(255),
  quantity INT NOT NULL
);

DROP TABLE IF EXISTS orders;
-- Tạo bảng `orders`
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  items TEXT,
  total DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (email, password)
VALUES ('user1@example.com', '123456'), ('user2@example.com', 'abcdef');
INSERT INTO foods (name, price)
VALUES ('Cơm gà', 30000), ('Cơm sườn', 25000), ('Cơm chay', 25000);
INSERT INTO carts (email, food_id, food_name, quantity)
VALUES 
  ('user1@example.com', 1, 'Cơm gà', 2),
  ('user2@example.com', 2, 'Cơm sườn', 1);
INSERT INTO orders (user_id, items, total) VALUES
(1, '[{"food_id":1,"food_name":"Cơm gà","quantity":2}]', 50000),
(2, '[{"food_id":2,"food_name":"Cơm sườn","quantity":1},{"food_id":3,"food_name":"Cơm cá","quantity":1}]', 90000);
SELECT * FROM users;
SELECT * FROM foods;
SELECT * FROM carts;
SELECT * FROM orders;