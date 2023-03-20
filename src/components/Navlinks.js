import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import Button from "./FormElements/Button";

function Navlinks() {
  const auth = useContext(AuthContext);
  return (
    <ul className="flex flex-col items-center md:flex-row md:ml-auto mt-3 md:mt-0">
      <li className="m-4 md:mx-2 md:my-0">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navLinks active" : "navLinks"
          }
          to={"/"}
        >
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li className="m-4 md:mx-2 md:my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLinks active" : "navLinks"
            }
            to={`${auth.userId}/places`}
          >
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className="m-4 md:mx-2 md:my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLinks active" : "navLinks"
            }
            to={"/places/new"}
          >
            ADD PLACE
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li className="m-4 md:mx-2 md:my-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLinks active" : "navLinks"
            }
            to={"/auth"}
          >
            AUTHENTICATE
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className="m-4 md:mx-2 md:my-0">
          <Button onClick={auth.logout}>LOGOUT</Button>
        </li>
      )}
    </ul>
  );
}

export default Navlinks;
