import React, { useEffect, useState } from "react";

import Navbar from "../commons/Navbar";
import './style.scss';

import { getAllLocations } from "../../api";

function Locations() {
  const [locations, setLocations] = useState([])

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
          <iframe
            title="Alcoholism Map"
            src="https://www.google.com/maps/d/embed?mid=1qJoIvzA7n9oyeCC56xRU-HvsuAA-k_sv&hl=en">
          </iframe>
        </div>

        <h1 className="title my-3">Beer Spots</h1>
        <div className="places">
          {locations &&
            locations.map(locations => (
              <div className="place" key={locations.ref.id}>
                <h2>{locations.data.name}</h2>
                <div className="meta">
                  <div className="price">
                    Price Range:
                    {locations.data.price}
                  </div>
                  <div className="untappd">
                    <a href={locations.data.untappd}>untappd</a>
                  </div>
                </div>
                <div className="details">
                  <p>Tumeric kogi truffaut, ugh migas gluten-free flannel. Glossier enamel pin synth, tbh tattooed you probably haven't heard of them tumeric williamsburg.</p>
                  <br/>
                  <p>{locations.data.address}</p>
                  <p><a href={locations.data.website}>{locations.data.website}</a></p>
                </div>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;