import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { AuthContext } from "./context/auth-context";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = useCallback(() => {
    setIsLoggedIn(true);
    navigate("/");
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    navigate("/auth");
  }, []);

  const showRoutes = useRoutes(routes);
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {showRoutes}
    </AuthContext.Provider>
  );
}

export default App;
