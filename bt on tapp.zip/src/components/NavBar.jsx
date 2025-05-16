import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>Movies</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}