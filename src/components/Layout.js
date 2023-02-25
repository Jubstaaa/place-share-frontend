import { Outlet } from "react-router-dom";
import Header from "./Header";
function Layout() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
