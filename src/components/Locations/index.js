import React from "react";

import Navbar from "../commons/Navbar";
import './style.css';

function Locations() {
  return (
    <div className="locations">
      <Navbar />
      <div className="main">
        <div className="map">
          <p>insert map here when googoo finally fixes the peer dependencies lol</p>
        </div>
      </div>

      <h2>Beer Spots</h2>
      <div className="places"> {/* TODO - get via db */}
        {/* <div class="place"></div> */}
      </div>
    </div>
  );
};

export default Locations;