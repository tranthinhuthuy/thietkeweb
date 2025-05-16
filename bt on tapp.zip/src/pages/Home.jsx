import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const data = await getPopularMovies();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      const data = await getPopularMovies();
      setMovies(data);
      return;
    }
    const data = await searchMovies(searchQuery);
    setMovies(data);
  }

  return (
    <div>
      <NavBar />
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}