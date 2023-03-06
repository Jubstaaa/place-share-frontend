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
      <header className="w-full h-16 flex md:justify-between items-center fixed inset-0 bg-[#ff0055] shadow-md px-4 z-10">
        <button
          onClick={openSidebarHandle}
          className="flex md:hidden w-12 h-12 bg-transparent flex-col justify-around mr-8 cursor-pointer"
        >
          <span className="block w-12 h-1 bg-white"></span>
          <span className="block w-12 h-1 bg-white"></span>
          <span className="block w-12 h-1 bg-white"></span>
        </button>
        <h1 className="text-white">
          <Link className="text-white" to={"/"}>
            Place Share
          </Link>
        </h1>
        <nav className="hidden md:block">
          <Navlinks />
        </nav>
      </header>
    </>
  );
}

export default Header;
