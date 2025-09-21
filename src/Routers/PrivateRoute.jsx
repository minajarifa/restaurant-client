import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading === true) {
    return (
      <div className="flex items-center justify-center my-20">
        <progress className="w-56 progress"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
}
