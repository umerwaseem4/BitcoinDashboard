import React from "react";
import logo from "../Images/brand-name.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="nav fixed-top">
        <img className="nav__logo" src={logo} alt="Logo" />
        <div className="nav__mainnav">
          <div>
            <ul>
              <li>
                <Link to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
