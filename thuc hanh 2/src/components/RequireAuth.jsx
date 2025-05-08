import { Navigate, useLocation } from "react-router-dom";
import { fakeAuthProvider } from "../auth";

export default function RequireAuth({ children }){
    const location = useLocation();
    if (!auth.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;
}