import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export default function UsersList() {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            {" "}
            (<Link to={`/users/${user.id}/edit`}>Edit</Link>)
          </li>
        ))}
      </ul>
    </div>
  );
}