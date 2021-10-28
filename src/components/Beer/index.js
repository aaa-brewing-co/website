import React from "react";

import Navbar from "../commons/Navbar";
import BeerStyles from "./BeerStyles";

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="section">

        <h2 className="title is-2">Most Common Beer Styles</h2>
        <BeerStyles />

        <h2 className="title is-2">Tasting Guide</h2>
        <ul>
          <li>Aesthetics</li>
          <ul>
            <li>SRM</li>
            <li>Carbonation</li>
          </ul>
          <li>Aromatics</li>
          <li>Mouthfeel / Body</li>
          <li>Flavour Components</li> {/* https://www.craftbeer.com/educational-resources/flavor-components-in-beer */}
          <ul>
            <li>Taste</li>
            <li>Mid-taste</li>
            <li>After-taste</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
