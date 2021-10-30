import React from "react";

import Navbar from "../commons/Navbar";
import BeerType from "../commons/beer-type";
import cat from '../../assets/cat.jpg';

function About() {
  return (
    <div className="about">
      <Navbar />
      <h1>Beer Styles</h1>
      <BeerType />
      <div className="main">
        <h1>What is Craft Beer?</h1>
        <p>blah blah blah</p>

        <h1>Beer Styles</h1>
        <p>blah blah blah</p>

        <h1>Beer Tasting Guide</h1>
        <p>blah blah blah</p>

        <img src={cat} alt="cat" loading="lazy" width="400" height="308"/>
      </div>
    </div>
  );
};

export default About;