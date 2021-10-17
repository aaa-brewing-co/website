import React from "react";
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" width="200" height="200" loading="lazy" />
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