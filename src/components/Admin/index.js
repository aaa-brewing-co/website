import React, { useEffect, useState } from "react";

import Navbar from "../commons/Navbar";
import './style.scss';

import CreateForm from "./CreateForm";
import { getAllLocations, deleteLocation } from "../../api";

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

  function handleDelete(e, id) {
    e.preventDefault();
    var confirm = window.confirm('R U SURE WANNA DELETE?');
    if (confirm) {
      deleteLocation(id).then(res => res);
      const newLocationsArray = locations.filter(note => note.ref.id !== id);
      setLocations(newLocationsArray);
      alert("rip to this location 🕊️");
    } else {
      alert("okie i never delete");
    }
  }

  return (
    <div className="admin">
      <Navbar />
      <div className="main">
        <button className="button is-primary" type="button" onClick={toggleClass}>Add Location</button>

        <div className={isActive ? 'modal is-active' : 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-content has-background-white p-6">
            <CreateForm/>
          </div>
          <button className="modal-close is-large" onClick={toggleClass} aria-label="close"></button>
        </div>

        <h1 className="title is-3 my-3">Locations</h1>

        <table className="table">
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
                  <button
                    onClick={(e) => handleDelete(e, locations.ref.id)}
                    type="button">🗑️</button>
                </td>
              </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Admin;