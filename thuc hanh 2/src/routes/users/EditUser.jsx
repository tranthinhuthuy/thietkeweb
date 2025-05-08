import { useParams } from "react-router-dom";

export default function EditUser() {
  const { userId } = useParams();

  return (
    <div>
      <h3>Edit User</h3>
      <p>Editing user with ID: <strong>{userId}</strong></p>
      <form>
        <label>
          Name: <input type="text" defaultValue={`User ${userId}`} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}