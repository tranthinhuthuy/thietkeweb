CREATE DATABASE rice_shop_sql;
GO
USE rice_shop_sql;
GO

CREATE TABLE users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  email NVARCHAR(255) NOT NULL UNIQUE,
  password NVARCHAR(255) NOT NULL
);
CREATE TABLE foods (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image NVARCHAR(255)
);
CREATE TABLE carts (
  id INT IDENTITY(1,1) PRIMARY KEY,
  email NVARCHAR(255) NOT NULL,
  food_id INT NOT NULL,
  food_name NVARCHAR(255),
  quantity INT NOT NULL
);

CREATE TABLE orders (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    cart_id INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (cart_id) REFERENCES carts(id)
);
CREATE TABLE order_history (
    id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT NOT NULL,
    user_id INT NOT NULL,
    cart_id INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status NVARCHAR(50) NOT NULL,  -- ví dụ: 'Đã thanh toán', 'Đã hủy'
    updated_at DATETIME DEFAULT GETDATE(),

    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (cart_id) REFERENCES carts(id)
);
INSERT INTO users (email, password)
VALUES 
('user1@example.com', 'password123'),
('user2@example.com', 'securepass456');
INSERT INTO foods (name, price, image)
VALUES 
('Cơm Gà', 30000.00, 'comga.jpg'),
('Cơm Sườn', 25000.00, 'comsuon.jpg');
INSERT INTO carts (email, food_id, food_name, quantity)
VALUES 
('user1@example.com', 1, 'Cơm Gà', 2),
('user2@example.com', 2, 'Cơm Sườn', 1);
INSERT INTO orders (user_id, cart_id, total_price)
VALUES 
(1, 4, 30000.00),
(2, 5, 25000.00);
INSERT INTO order_history (order_id, user_id, cart_id, total_price, status)
VALUES 
(3, 1, 4, 30000.00, N'Đã thanh toán'),
(4, 2, 5, 25000.00, N'Đã thanh toán');
SELECT * FROM users;
SELECT * FROM foods;
SELECT * FROM carts;
SELECT * FROM orders;
SELECT * FROM order_history;