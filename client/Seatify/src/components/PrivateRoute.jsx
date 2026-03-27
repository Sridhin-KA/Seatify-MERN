import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children, requireEmployee = false }) {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  // 🔐 1. Not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // 🔐 2. Employee check
  if (requireEmployee && !user.isEmployee) {
    return (
      <Navigate
        to="/unauthorized"   // create this page or redirect home
        replace
      />
    );
  }

  // ✅ Allowed
  return children;
}

export default PrivateRoute;