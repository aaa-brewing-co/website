import React, { useEffect, useState } from "react";

import Navbar from "../commons/Navbar";
import './style.css';

import CreateForm from "./CreateForm";
import { getAllLocations, editLocation } from "../../api";

function Admin() {
  const [locations, setLocations] = useState([]);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    getAllLocations.then(res => {
      setLocations(res);
      // console.log(res);
    });
  }, []);

  return (
    <div className="admin">
      <Navbar />
      <div className="main">
        <button type="button" onClick={toggleClass}>Add Location</button>
        <div className={isActive ? null : 'hide'}>
          <CreateForm/>
        </div>

        <h1>Locations</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Address</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th></th>
            <th></th>
          </tr>
          {locations.map(locations => (
              <tr>
                <td>{locations.data.name}</td>
                <td>{locations.data.price}</td>
                <td>{locations.data.address}</td>
                <td>{locations.data.lon}</td>
                <td>{locations.data.lat}</td>
                <td>
                  <button data-value={locations.ref.id} type="button">✏️</button>
                </td>
                <td>
                  <button type="button">🗑️</button>
                </td>
              </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Admin;