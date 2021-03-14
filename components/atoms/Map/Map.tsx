// @ts-nocheck
import React, { useState, useRef, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/router";
import useMapStore from "../../../store/useMapStore";
import ReactDOMServer from "react-dom/server";
import Leaflet from "leaflet";
import Icon from "../../../public/child-solid.svg";

const icon = Leaflet.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(<Icon />),
  iconSize: [20, 0],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});

const Markers = () => {
  const [bounds, setBounds] = useState([]);
  const [points] = useMapStore((store) => [store.points]);
  const mapRef = useMap();

  useEffect(() => {
    if (points.length !== 0) {
      let _bounds = [];
      points.forEach((point) => {
        _bounds.push([point.lat, point.lng]);
      });
      setBounds(_bounds);
      mapRef.fitBounds(_bounds);
    }
  }, [points]);

  return (
    <>
      {bounds?.map((bound, index) => {
        return (
          <Marker key={index} position={bound} icon={icon}>
            <Tooltip>Here!!</Tooltip>
          </Marker>
        );
      })}
    </>
  );
};

const LeafletMap = () => {
  const router = useRouter();

  return (
    <MapContainer
      // center={[parseParamFloat(lat) || 35.6727932, parseParamFloat(lng) || 139.7351433]}
      bounds={[[35.6727932, 139.7351433]]}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      ondragend={(event) => {
        const z = event.target.getZoom();
        const c = event.target.getCenter();
        router.push(`?lng=${c.lng}&lat=${c.lat}&zoom=${z}`);
      }}
      onzoomend={(event) => {
        const z = event.target.getZoom();
        const c = event.target.getCenter();
        router.push(`?lng=${c.lng}&lat=${c.lat}&zoom=${z}`);
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
    </MapContainer>
  );
};

export default LeafletMap;

// import React, { useState, useRef, useEffect } from "react";
// import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
// import useMapStore from "../../../store/useMapStore";

// const containerStyle = {
//   height: "100%",
//   width: "100%",
// };
// const GoogleMap = (props) => {
//   const [points, setPoints] = useMapStore((store) => [store.points, store.setPoints]);
//   const mapRef = useRef();

//   useEffect(() => {
//     if (points.length !== 0) {
//       const bounds = new props.google.maps.LatLngBounds();
//       points.forEach((point) => {
//         bounds.extend(point);
//       });
//       mapRef?.current.map.fitBounds(bounds);
//     }
//   }, [points]);

//   return (
//     <Map
//       google={props.google}
//       maxZoom={20}
//       containerStyle={containerStyle}
//       initialCenter={{ lat: 35.6727932, lng: 139.7351433 }}
//       ref={mapRef}
//       gestureHandling="greedy"
//     >
//       {points?.map((point, index) => {
//         return <Marker key={index} position={point} />;
//       })}
//     </Map>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
// })(GoogleMap);
