import React, { useEffect, useState } from "react";

import Navbar from "../commons/Navbar";
import untappd from "../../assets/untappd.png";
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

  function Price({price}) {
    let value = price
    let dollars = ""
    for (var i = 0; i < value; i++) {
      dollars += "$";
    }
    return (
      dollars
    );
  };

  function UntappdButton({href}) {
    return (
      <div className="untappd">
        <a href={href}>
          <img src={untappd} className="untappd-logo" alt="Untappd Logo" loading="lazy" />
        </a>
      </div>
    );
  };

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

        <h1 className="title my-6">Beer Spots</h1>
        <div className="places">
          {/* TODO - LIMIT TO 6 + SHOW MORE */}
          {locations &&
            locations.map(locations => (
              <div className="place" key={locations.ref.id}>
                <h2>{locations.data.name}</h2>
                <div className="meta">
                  <div className="price">
                    {locations.data.price ? <Price price={locations.data.price} /> : ''}
                  </div>
                  {locations.data.untappd ? <UntappdButton href={locations.data.untappd} /> : ''}
                </div>
                <div className="details">
                  <p>Tumeric kogi truffaut, ugh migas gluten-free flannel. Glossier enamel pin synth, tbh tattooed you probably haven't heard of them tumeric williamsburg.</p>
                  <br/>
                  <p>{locations.data.address}</p>
                  <p className="links">
                    {locations.data.website ? <a href={locations.data.website}>Website</a> : ''}
                    {locations.data.googleMap ? <a href={locations.data.googleMap}>Google Maps</a> : ''}
                  </p>
                </div>

              </div>
            ))}
        </div>
        <div className="legend">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="2">LEGEND</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>$</th>
                <td>$0 - $15</td>
              </tr>
              <tr>
                <th>$$</th>
                <td>$16 - $30</td>
              </tr>
              <tr>
                <th>$$$</th>
                <td>$31 - $50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Locations;