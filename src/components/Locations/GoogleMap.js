import React, { useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { mapStyles } from './MapStyles';

import HopIcon from "../../assets/icons/hop.png";
import BeerIcon from "../../assets/icons/beer.png";
import BreweryIcon from "../../assets/icons/brewery.png";

export default function MapWrapper({locations}) {
  const center = { lat: 1.3605, lng: 103.7936 };
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
    // Google maps options ref
    // https://developers.google.com/maps/documentation/javascript/overview
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      mapTypeId: 'roadmap',
      mapTypeControl: false,
      streetViewControl: false,
      styles: mapStyles
    });
    let markerPosition, icon;
    const infoWindow = new window.google.maps.InfoWindow();
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

        // user's marker - TODO get current position
        new window.google.maps.Marker({
          title: "Current Location",
          position: center,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8.5,
            fillColor: "#4285f4",
            fillOpacity: 0.4,
            strokeWeight: 0.4,
            strokeColor:'white'
          },
          animation: window.google.maps.Animation.DROP,
          map: map,
        });

        const infoContent =
        '<h1 class="heading">'+marker.getTitle()+'</h1>' +
        '<p>'+location.data.address+'</p>' +
        '<a target="_blank" href="'+location.data.googleMap+'">View on Google Maps</a>'

        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(infoContent);
          infoWindow.setOptions({maxWidth:300});
          infoWindow.open(marker.getMap(), marker);
        });
      }
    });
    // update center to last location
    // map.setCenter(markerPosition);
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
