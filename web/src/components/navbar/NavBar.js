import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <li className="nav-item me-auto">
          <Link className="navbar-brand" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="nav-item me-auto">
          <Link className="navbar-brand" to="AboutUs">
            {" "}
            About Us{" "}
          </Link>
        </li>
        <li className="nav-item me-auto">
          <Link className="navbar-brand" to="/Shows">
            {" "}
            Shows{" "}
          </Link>
        </li>
        <li className="nav-item me-auto">
          <Link className="navbar-brand" to="/partners">
            {" "}
            Find a partner!{" "}
          </Link>
        </li>
        <li className="nav-item me-auto">
          <Link className="navbar-brand" to="/login">
            {" "}
            Hi User!{" "}
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
