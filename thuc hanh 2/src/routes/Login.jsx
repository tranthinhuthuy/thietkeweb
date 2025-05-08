import { useLocation, useNavigate } from "react-router-dom";
import { auth} from "../auth";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
   auth.signin(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
}