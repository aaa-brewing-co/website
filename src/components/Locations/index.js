import React, { useEffect, useState } from "react";

import Navbar from "../commons/Navbar";
import Map from "./GoogleMap";
import Places from "./Places/";
import Legend from "./Legend";

import { getAllLocations } from "../../api"

import './style.scss';

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getAllLocations.then(res => {
      setLocations(res);
      // console.log(res);
    })
  }, [])

  return (
    <div className="locations">
      <Navbar />
      <div className="main">
        <div className="map">
          <Map locations={locations} />
          {/* <iframe
            title="Alcoholism Map"
            src="https://www.google.com/maps/d/embed?mid=1qJoIvzA7n9oyeCC56xRU-HvsuAA-k_sv&hl=en">
          </iframe> */}
        </div>

        <h1 className="heading mt-6 mb-2">Beer Spots</h1>
        <Places locations={locations} />

        <Legend />
      </div>
    </div>
  );
};
