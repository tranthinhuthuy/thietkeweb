import { Link, Outlet } from "react-router-dom";

export default function UsersLayout() {
  return (
    <div>
      <h2>Users Section</h2>
      <nav>
        <ul>
          <li><Link to="/users">User List</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}