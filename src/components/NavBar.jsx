import React from 'react';
import { NavLink } from "react-router-dom";
import NavProfile from "./NavProfile";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/episodes">Episodes</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavProfile />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
