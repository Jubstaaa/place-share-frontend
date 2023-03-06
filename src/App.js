import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { AuthContext } from "./context/auth-context";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);
  const navigate = useNavigate();

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
    navigate("/");
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    navigate("/auth");
  }, []);

  const showRoutes = useRoutes(routes);
  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      <Toaster />
      {showRoutes}
    </AuthContext.Provider>
  );
}

export default App;
