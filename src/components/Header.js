import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import SideHeader from "./SideHeader";
import Navlinks from "./Navlinks";
import Backdrop from "./UIElements/Backdrop";

function Header() {
  const [sidebaropen, setSidebarOpen] = useState(false);

  const openSidebarHandle = () => {
    setSidebarOpen(true);
  };

  const closeSidebarHandler = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebaropen && <Backdrop onClick={closeSidebarHandler} />}
      {sidebaropen && (
        <SideHeader show={sidebaropen} onClick={closeSidebarHandler}>
          <nav className="h-full">
            <Navlinks />
          </nav>
        </SideHeader>
      )}
      <header className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link className="font-bold text-xl text-indigo-600" to={"/"}>
              Place Share
            </Link>
            <button
              onClick={openSidebarHandle}
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <div className="flex md:hidden w-8 h-8 bg-transparent flex-col justify-around cursor-pointer">
                <span className="block w-8 h-1 bg-gray-600"></span>
                <span className="block w-8 h-1 bg-gray-600"></span>
                <span className="block w-8 h-1 bg-gray-600"></span>
              </div>
            </button>
          </div>
          <nav className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
            <Navlinks />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
