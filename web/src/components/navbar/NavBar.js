import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <li class="nav-item">
          <Link className="navbar-brand" to="/">{" "}Home{" "}</Link>
        </li>
        <li class="nav-item">
          <Link className="navbar-brand" to="/whoweare">{" "}Who we are?{" "}</Link>
        </li>
        <li class="nav-item">
          <Link className="navbar-brand" to="/events">{" "}Events{" "}</Link>
        </li>
        <li class="nav-item">
          <Link className="navbar-brand" to="/partners">{" "}Find a partner!{" "}</Link>
        </li>
        <li class="nav-item">
          <Link className="navbar-brand" to="/partners">{" "}Hi User!{" "}</Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
