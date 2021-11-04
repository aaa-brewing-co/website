import React, { useEffect, useState } from "react";

import { editLocation  } from "../../api";

function EditForm(props) {
  const _refId = props.location ? props.location.ref.id : '';
  const _name = props.location ? props.location.data.name : '';
  const _price = props.location ? props.location.data.price : '';
  const _address = props.location ? props.location.data.address : '';
  const _googleMap = props.location ? props.location.data.googleMap : '';
  const _website = props.location ? props.location.data.website: '';
  const _untappd = props.location ? props.location.data.untappd : '';
  const _lon = props.location ? props.location.data.lon : '';
  const _lat = props.location ? props.location.data.lat : '';

  const [id, setId] = useState(_refId);
  const [name, setName] = useState(_name);
  const [price, setPrice] = useState(_price);
  const [address, setAddress] = useState(_address);
  const [googleMap, setGoogleMap] = useState(_googleMap);
  const [website, setWebsite] = useState(_website);
  const [untappd, setUntappd] = useState(_untappd);
  const [lon, setLon] = useState(_lon);
  const [lat, setLat] = useState(_lat);

  useEffect(() => {
    setId(_refId);
    setName(_name);
    setPrice(_price);
    setAddress(_address);
    setGoogleMap(_googleMap);
    setWebsite(_website);
    setUntappd(_untappd);
    setLon(_lon);
    setLat(_lat);
  }, [
    _refId,
    _name,
    _price,
    _address,
    _googleMap,
    _website,
    _untappd,
    _lon,
    _lat
  ]);

  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      address: address,
      googleMap: googleMap,
      website: website,
      untappd: untappd,
      lon: lon,
      lat: lat
    };
    editLocation(id, data)
      .then(res => {
        props.onLocationUpdated(res);
        alert('Created Updated')
      })
      .catch(error => console.error('Error: ', error.message));
  }

  function updateName(e) {
    setName(e.target.value);
  }

  function updatePrice(e) {
    setPrice(e.target.value);
  }

  function updateAddress(e) {
    setAddress(e.target.value);
  }

  function updateGoogleMap(e) {
    setGoogleMap(e.target.value);
  }

  function updateWebsite(e) {
    setWebsite(e.target.value);
  }

  function updateUntappd(e) {
    setUntappd(e.target.value);
  }

  function updateLon(e) {
    setLon(e.target.value);
  }

  function updateLat(e) {
    setLat(e.target.value);
  }

  return (
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" value={name} onChange={updateName} type="text" name="name" placeholder="Name" required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Price</label>
        <div className="control">
          <input className="input" value={price} onChange={updatePrice} type="text" name="price" placeholder="Price"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Address</label>
        <div className="control">
          <input className="input" value={address} onChange={updateAddress} type="text" name="address" placeholder="Address"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Google Maps URL</label>
        <div className="control">
          <input className="input" value={googleMap} onChange={updateGoogleMap} type="text" name="googleMap" placeholder="Google Maps URL"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Website URL</label>
        <div className="control">
          <input className="input" value={website} onChange={updateWebsite} type="text" name="website" placeholder="Website URL"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Untappd URL</label>
        <div className="control">
          <input className="input" value={untappd} onChange={updateUntappd} type="text" name="untappd" placeholder="Untappd URL"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Latitude</label>
        <div className="control">
          <input className="input" value={lat} onChange={updateLat} type="text" name="lat" placeholder="Latitude"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Longitude</label>
        <div className="control">
          <input className="input" value={lon} onChange={updateLon} type="text" name="lon" placeholder="Longitude"  required/>
        </div>
      </div>
      <div className="field">
        <button className="button is-primary" onClick={handleEdit}  type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditForm;