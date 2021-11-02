import React, { useRef, useEffect, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function MapWrapper() {
  const center = { lat: 1.3654, lng: 103.8436 };
  const zoom = 12;
  const kanpai = { lat: 1.2838, lng: 103.8485 };

  return (
    <Wrapper apiKey={process.env.REACT_APP_GMAPS_API_KEY} render={render}>
      <Map center={center} zoom={zoom} >
        <Marker position={kanpai} />
      </Map>
    </Wrapper>
  );
}

const render = function (status) {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function Map({ center, zoom, children }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center,
        zoom
      }));
    }
  }, [ref, map, center, zoom]);

  return (
    <>
      <div ref={ref} id="map" />
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map }, null);
        }
      })}
    </>
  );
}

function Marker ({ position }) {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(position);
    }
  }, [marker, position]);

  return null;
}
