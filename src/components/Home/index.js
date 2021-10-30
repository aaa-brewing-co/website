import React from "react";

import Header from "../commons/Header";
// import BeerAnimation from "../commons/beer-animation";
import Navbar from "../commons/Navbar";

import './home.scss';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      {/* <BeerAnimation /> */}
    </div>
  );
};

export default Home;