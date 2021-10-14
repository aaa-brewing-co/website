import React from "react";
import logo from '../logo.png';

import Navbar from "./Navbar"

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        AAA Brewing Co
      </p>
      <Navbar />
    </header>
  );
};

export default Header;