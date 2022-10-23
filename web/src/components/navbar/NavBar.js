import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const user = useContext(AuthContext);
  console.log("huhuhuhu", user);
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
          <Link className="navbar-brand" to="/login">
            {" "}
            Hi User! {user.registerUser.data.name}
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
