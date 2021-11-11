import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-white.png';

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" width="100" height="100" loading="lazy" />
      <Link className="shh" to="/admin"></Link>
    </footer>
  );
};