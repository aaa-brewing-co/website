import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '80%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 1.3448,
        lng: 103.8224
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      //
    });
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={this.state.center}
      />
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDdHXKL6n8YS88rIn708Hdoc-Sba4SDcEE'
})(MapContainer);