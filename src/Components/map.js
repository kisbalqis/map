// import { Marker, Popup } from "leaflet";
import React, { useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker, { IconDT, IconDG, IconBD } from "./iconMarker";


function Maps() {
const center =[0.8051,117.5860]
const positionA = [0.7731,117.6455];
const positionB = [0.8366,117.6006];
const positionC = [0.7992,117.5293];
const leafletMap = useRef(null);
  return (
    <>
      <div className="map-wrapper">
        <MapContainer
          center={center}
          zoom={12}
          style={{ height: "500px" }} // Adjust the height value here
          //   scrollWheelZoom
          ref={leafletMap}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionA} icon={iconMarker}>
            <Popup>
              PIT A
            </Popup>
          </Marker>
          <Marker position={positionB} icon={iconMarker}>
            <Popup>
              PIT B
            </Popup>
          </Marker>
          <Marker position={positionC} icon={iconMarker}>
            <Popup>
              PIT C
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Maps;
