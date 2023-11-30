import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const NavProfile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <span className="nav-profile">

      { !user &&
        <>
          <NavLink to={"/login"}>Log in</NavLink>
        </>
      }

      { user &&
        <>
          {user}
          <button onClick={() => logout(() => navigate("/", { replace: true }))}>
            Log out
          </button>
        </>
      }

    </span>)
};

export default NavProfile;
