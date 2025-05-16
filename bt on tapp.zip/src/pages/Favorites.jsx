import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

export default function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div>
      <NavBar />
      <div className="favorites">
        <h1>Favorite Movies</h1>
        {favorites.length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          <div className="movie-grid">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}