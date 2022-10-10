import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <Link className="navbar-brand" to= '/'> Home </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="navbar-brand" to= '/whoweare'> Who we are? </Link>
            </li>
            <li class="nav-item">
              <Link className="navbar-brand" to= '/events'> Events </Link>
            </li>
            <li class="nav-item">
              <Link className="navbar-brand" to= '/partners'> Find a partner! </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
