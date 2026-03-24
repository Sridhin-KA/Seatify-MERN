import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth); // adjust if needed
  const location = useLocation();

  if (!user) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location }}  // 👈 save previous page
        replace
      />
    );
  }

  return children;
}

export default PrivateRoute;