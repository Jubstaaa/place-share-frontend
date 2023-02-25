import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function PrivateRoute({ children }) {
  const user = useContext(AuthContext);

  const location = useLocation();
  if (!user.isLoggedIn) {
    return (
      <Navigate
        to="/auth"
        replace={true}
        state={{ return_url: location.pathname }}
      />
    );
  }
  return children;
}
export default PrivateRoute;
