// import { Marker, Popup } from "leaflet";
import React, { useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker, { IconDT, IconDG, IconBD } from "./iconMarker";
import DTpitB from "../fakejson/DT/pitB";
import DGpitB from "../fakejson/DG/pitB";
import BDpitB from "../fakejson/BD/pitB";

function MapsPitB() {
  const positionB = [0.8366, 117.6006];

  console.log(DTpitB)
  const leafletMap = useRef(null);
  return (
    <>
      <div className="map-wrapper">
        <MapContainer
          center={positionB}
          zoom={15}
          style={{ height: "500px" }} // Adjust the height value here
          //   scrollWheelZoom
          ref={leafletMap}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[0.8346,117.6076]} icon={IconDT}>
            <Popup>{DTpitB.length} Unit</Popup>
          </Marker>

          <Marker position={[0.8386,117.6006]} icon={IconDG}>
            <Popup>{DGpitB.length} Unit</Popup>
          </Marker>

          <Marker position={[0.8366,117.6026]} icon={IconBD}>
            <Popup>{BDpitB.length} Unit</Popup>
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

export default MapsPitB;
