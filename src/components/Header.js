import React from "react";
import logo from '../logo.png';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        SAVE WATER
        <br/>
        DRINK BEER
        <br />
        🍻
      </p>
    </header>
  );
};

export default Header;