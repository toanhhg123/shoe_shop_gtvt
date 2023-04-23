import React, { useContext } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/userContext";
const Header = () => {
  const { cookies, clearCookies } = useContext(AuthContext);
  return (
    <div className="header-main">
      <ul className="head-con">
        <li className="header-list">
          <NavLink className="lnk" activeclassname="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="header-list">
          <NavLink className="lnk" activeclassname="active" to="/Men">
            Men
          </NavLink>
        </li>
        <li className="header-list">
          <NavLink className="lnk" activeclassname="active" to="/Women">
            Women
          </NavLink>
        </li>
        <li className="header-list">
          <NavLink className="lnk" activeclassname="active" to="/Slippers">
            Gioi Hang
          </NavLink>
        </li>
        {!cookies ? (
          <>
            {" "}
            <li className="header-list">
              <NavLink className="lnk" activeclassname="active" to="/Login">
                Login
              </NavLink>
            </li>
            <li className="header-list">
              <NavLink className="lnk" activeclassname="active" to="/Register">
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <li className="header-list">
            <a className="lnk" href="#/" onClick={clearCookies}>
              LogOut
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
