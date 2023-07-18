// import { Marker, Popup } from "leaflet";
import React, { useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker, { IconDT, IconDG, IconBD } from "./iconMarker";
import DTpitA from "../fakejson/DT/pitA";
import DGpitA from "../fakejson/DG/pitA";
import BDpitA from "../fakejson/BD/pitA";

function MapsPitA() {
  const positionA = [0.7731, 117.6455];
  const positionB = [0.8366, 117.6006];
  const positionC = [0.7992, 117.5293];

  // console.log(pitA)
  const leafletMap = useRef(null);
  return (
    <>
      <div className="map-wrapper">
        <MapContainer
          center={positionA}
          zoom={15}
          style={{ height: "500px" }} // Adjust the height value here
          //   scrollWheelZoom
          ref={leafletMap}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[0.7743, 117.6455]} icon={IconDT}>
            <Popup>{DGpitA.length} Unit</Popup>
          </Marker>

          <Marker position={[0.7751, 117.649]} icon={IconDG}>
            <Popup>{DGpitA.length} Unit</Popup>
          </Marker>

          <Marker position={[0.772, 117.6455]} icon={IconBD}>
            <Popup>{BDpitA.length} Unit</Popup>
          </Marker>

          {/* {DGpitA?
            DGpitA?.map((v,i)=>{
              return(
                <Marker position={v.location} icon={IconDG}>
                  <Popup>
                    {v.noUnit}
                  </Popup>
                </Marker>
              )
            })
            :
            <Marker position={positionA} icon={iconMarker}>
            <Popup>
              PIT A
            </Popup>
          </Marker>} */}
        </MapContainer>
      </div>
    </>
  );
}

export default MapsPitA;
