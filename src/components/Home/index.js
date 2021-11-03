import React from "react";

import Header from "../commons/Header";
// import BeerAnimation from "../commons/beer-animation";
import Navbar from "../commons/Navbar";
import Bubbles from "../commons/Bubbles";

import './home.scss';

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Header
        title="Explore the world of craft beer"
        subtitle={"Curated by 3 (drunk) friends.\nAAA aims to spread the love of beer and serve as a resource for craft beer knowledge and locations in Singapore."}
      />

      {/* <BeerAnimation /> */}
      <Bubbles />
    </div>
  );
};

export default Home;