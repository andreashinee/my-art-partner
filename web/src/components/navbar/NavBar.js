import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <li class="nav-item me-auto">
          <Link className="navbar-brand" to="/">{" "}Home{" "}</Link>
        </li>
        <li class="nav-item me-auto">
          <Link className="navbar-brand" to="/whoweare">{" "}Who we are?{" "}</Link>
        </li>
        <li class="nav-item me-auto">
          <Link className="navbar-brand" to="/Shows">{" "}Shows{" "}</Link>
        </li>
        <li class="nav-item me-auto">
          <Link className="navbar-brand" to="/partners">{" "}Find a partner!{" "}</Link>
        </li>
        <li class="nav-item me-auto">
          <Link className="navbar-brand" to="/partners">{" "}Hi User!{" "}</Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
