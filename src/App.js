import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { AuthContext } from "./context/auth-context";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/auth-hook";

function App() {
  const { token, login, logout, userId } = useAuth();

  const showRoutes = useRoutes(routes);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token, userId, login, logout }}
    >
      <Toaster />
      {showRoutes}
    </AuthContext.Provider>
  );
}

export default App;
