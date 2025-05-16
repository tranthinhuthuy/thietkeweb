const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();
const users = []; // Dữ liệu tạm thời trong RAM

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

// Middleware xác thực token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Đăng ký
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Username and password are required" });

  const existing = users.find((u) => u.username === username);
  if (existing)
    return res.status(400).json({ error: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed, favorites: [] });
  res.json({ message: "Registered successfully" });
});

// Đăng nhập
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Username and password are required" });

  const user = users.find((u) => u.username === username);
  if (!user)
    return res.status(400).json({ error: "Invalid credentials" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Lấy danh sách yêu thích
router.get("/favorites", authMiddleware, (req, res) => {
  const user = users.find((u) => u.username === req.user.username);
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user.favorites || []);
});

// Thêm phim vào yêu thích
router.post("/favorites", authMiddleware, (req, res) => {
  const movie = req.body.movie;
  if (!movie || !movie.id)
    return res.status(400).json({ error: "Invalid movie data" });

  const user = users.find((u) => u.username === req.user.username);
  if (!user) return res.status(404).json({ error: "User not found" });

  const exists = user.favorites.find((m) => m.id == movie.id);
  if (exists)
    return res.status(400).json({ error: "Movie already in favorites" });

  user.favorites.push(movie);
  res.json({ message: "Added to favorites" });
});

// Xoá phim khỏi yêu thích
router.delete("/favorites/:id", authMiddleware, (req, res) => {
  const movieId = req.params.id;
  const user = users.find((u) => u.username === req.user.username);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.favorites = user.favorites.filter((m) => m.id != movieId);
  res.json({ message: "Removed from favorites" });
});

module.exports = router;