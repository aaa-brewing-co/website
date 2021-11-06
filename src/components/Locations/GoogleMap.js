import React, { useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import HopIcon from "../../assets/icons/hop.png";
import BeerIcon from "../../assets/icons/beer.png";
import BreweryIcon from "../../assets/icons/brewery.png";

export default function MapWrapper({locations}) {
  const center = { lat: 1.3654, lng: 103.8436 };
  const zoom = 12;

  const render = function (status) {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

  return (
    <Wrapper apiKey={process.env.REACT_APP_GMAPS_API_KEY} render={render}>
      <Map center={center} zoom={zoom} locations={locations} />
    </Wrapper>
  );
}

function Map({ center, zoom, locations }) {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom
    });
    let markerPosition, icon;
    locations.forEach(location => {
      if (location.data.lat && location.data.lon && location.data.type) {
        markerPosition = {
          lat: Number(location.data.lat),
          lng: Number(location.data.lon)
        };

        if (location.data.type === "craft") {
          icon = HopIcon;
        } else if (location.data.type === "brewery") {
          icon = BreweryIcon;
        } else {
          icon = BeerIcon;
        }

        const marker = new window.google.maps.Marker({
          title: location.data.name,
          position: markerPosition,
          icon: {
            url: icon,
            scaledSize: new window.google.maps.Size(40, 40),
          },
          animation: window.google.maps.Animation.DROP,
          map: map,
        });

        const infoWindow = new window.google.maps.InfoWindow();
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      }
    });
    // update center to last location
    map.setCenter(markerPosition);
  }, [ref, locations, center, zoom]);

  return (
    <div ref={ref} id="map" />
  );
}

// function Marker ({ position }) {
//   const [marker, setMarker] = useState();

//   useEffect(() => {
//     if (!marker) {
//       setMarker(new window.google.maps.Marker());
//     }
//   }, [marker]);

//   useEffect(() => {
//     if (marker) {
//       marker.setOptions(position);
//     }
//   }, [marker, position]);

//   return null;
// }
