import React from "react";

import Navbar from "../commons/Navbar";
import cat from '../../assets/cat.jpg';

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="main">
        <h1>What is Craft Beer?</h1>
        <p>blah blah blah</p>

        <h1>Beer Styles</h1>
        <p>blah blah blah</p>

        <h1>Beer Tasting Guide</h1>
        <p>blah blah blah</p>

        <img src={cat} alt="cat" />
      </div>
    </div>
  );
};

export default About;