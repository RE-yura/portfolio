// @ts-nocheck
// import GoogleMapReact from "google-map-react";
import React, { useState, useRef, useEffect } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import useMapStore from "../../../store/useMapStore";

const containerStyle = {
  height: "100%",
  width: "100%",
};
const GoogleMap = (props) => {
  const [points, setPoints] = useMapStore((store) => [store.points, store.setPoints]);
  const mapRef = useRef();

  useEffect(() => {
    if (points.length !== 0) {
      const bounds = new props.google.maps.LatLngBounds();
      points.forEach((point) => {
        bounds.extend(point);
      });
      mapRef?.current.map.fitBounds(bounds);
    }
  }, [points]);

  return (
    <Map
      google={props.google}
      maxZoom={20}
      containerStyle={containerStyle}
      initialCenter={{ lat: 35.6727932, lng: 139.7351433 }}
      ref={mapRef}
      gestureHandling="greedy"
    >
      {points?.map((point, index) => {
        return <Marker key={index} position={point} />;
      })}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
})(GoogleMap);

// const MapModal = () => {
//   const defaultLatLng = {
//     lat: 35.7022589,
//     lng: 139.7744733,
//   };

//   const items = [
//     {
//       lat: 35.7022589,
//       lng: 139.6744733,
//     },
//     {
//       lat: 35.3022589,
//       lng: 139.5744733,
//     },
//     {
//       lat: 35.7022589,
//       lng: 139.8744733,
//     },
//   ];

//   const handleApiLoaded = ({ map, maps }) => {
//     const bounds = new maps.LatLngBounds();
//     items.forEach((item) => {
//       const marker = new maps.Marker({
//         position: {
//           lat: item.lat,
//           lng: item.lng,
//         },
//         map,
//       });
//       bounds.extend(marker.position);
//     });
//     map.fitBounds(bounds);
//   };

//   return (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     </GoogleMap>
//     // <div style={{ height: "300px", width: "300px" }}>
//     //   <GoogleMapReact
//     //     bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
//     //     defaultZoom={16}
//     //     defaultCenter={defaultLatLng}
//     //     //   onGoogleApiLoaded={handleApiLoaded}
//     //     markers={items}
//     //   >
//     //     {items.map((marker) => (
//     //       <Marker {...marker} />
//     //     ))}
//     //   </GoogleMapReact>
//     // </div>
//   );
// };

// export default MapModal;
