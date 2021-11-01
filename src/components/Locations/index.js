import React from "react";

import Navbar from "../commons/Navbar";
import Places from "./Places";
import './style.scss';

export default function Locations() {
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
        <Places />

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
