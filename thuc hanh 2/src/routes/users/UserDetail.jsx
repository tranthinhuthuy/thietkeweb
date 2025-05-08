import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { userId } = useParams();

  return (
    <div>
      <h3>User Detail</h3>
      <p>Showing details for user with ID: <strong>{userId}</strong></p>
    </div>
  );
}