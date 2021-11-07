import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/beer">Beer 101</Link>
        </li>
        <li>
          <Link to="/locations">locations</Link>
        </li>
        <li>
          <Link to="/shops">shops</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;