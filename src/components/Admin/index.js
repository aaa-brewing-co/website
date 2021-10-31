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

  function displayPrice(priceVal) {
    let price = '';
    for (let i = 0; i < priceVal; i++) {
      price += '$';
    }
    return price;
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

        {locations.map(locations => (
          <div className="card" key={locations.ref.id}>
            <div className="card-header">
              <div className="card-header-title is-flex is-justify-content-space-between">
                <h4 className="is-size-4">{locations.data.name}</h4>
                <span className="tag">{displayPrice(locations.data.price)}</span>
              </div>
            </div>
            <div className="card-content">
              <div className="content">
                <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
                  <div>
                    <p>{locations.data.address}</p>
                    <div className="buttons mb-1">
                      {
                        locations.data.googleMap &&
                        <a className="button is-success" href={locations.data.googleMap}>Google Map</a>
                      }
                      {
                        locations.data.website &&
                        <a className="button is-link" href={locations.data.website}>Link</a>
                      }
                      {
                        locations.data.untappd &&
                        <a className="button is-info" href={locations.data.untappd}>Untappd</a>
                      }
                    </div>
                  </div>
                  <div>
                    <div className="buttons">
                      <button className="button is-warning is-outlined" data-value={locations.ref.id} type="button">✏️</button>
                      <button className="button is-danger is-outlined"
                        onClick={(e) => handleDelete(e, locations.ref.id)}
                        type="button">🗑️</button>
                    </div>
                  </div>
                </div>
                {
                  /*
                    to use in map locations
                    locations.data.lon
                    locations.data.lat
                   */
                }
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Admin;
