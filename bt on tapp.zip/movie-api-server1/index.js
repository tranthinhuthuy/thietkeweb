const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

app.use(cors());
app.use(express.json());

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Route tìm kiếm phim
app.get("/api/movies/search", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("TMDb Search Error:", error.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// Route phim phổ biến
app.get("/api/movies/popular", async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("TMDb Popular Error:", error.message);
    res.status(500).json({ error: "Failed to fetch popular movies" });
  }
});

// Route chi tiết phim
app.get("/api/movies/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("TMDb Detail Error:", error.message);
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
});

// ✅ Thêm routes cho user (đăng ký, đăng nhập, v.v.)
const userRoutes = require("./users");
app.use("/api/users", userRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Movie API server is running at http://localhost:${PORT}`);
});