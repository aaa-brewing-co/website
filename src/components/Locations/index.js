import React from "react";

import Navbar from "../commons/Navbar";
import Map from "./GoogleMap";
import Places from "./Places";
import Legend from "./Legend";

import './style.scss';

export default function Locations() {
  return (
    <div className="locations">
      <Navbar />
      <div className="main">
        <div className="map">
          <Map />
          {/* <iframe
            title="Alcoholism Map"
            src="https://www.google.com/maps/d/embed?mid=1qJoIvzA7n9oyeCC56xRU-HvsuAA-k_sv&hl=en">
          </iframe> */}
        </div>

        <h1 className="title my-6">Beer Spots</h1>
        <Places />

        <Legend />
      </div>
    </div>
  );
};
