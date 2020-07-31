import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navBrand from "../Images/brand-name.png";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [color, setColor] = useState("white");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg fixed-top  ${
          show && "nav__black navbar-light bg-light"
        }`}
      >
        <div className="container">
          <Link class="navbar-brand" to="/">
            <img src={navBrand} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-white"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto text-center">
              <li class="nav-item active">
                <Link class={`${show || color} nav-link`} to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`${show || color} nav-link`} to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item ">
                <Link class={`${show || color} nav-link`} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
