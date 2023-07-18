import * as L from "leaflet";
import iconDT from "../assets/dumb-truck.png";
import iconDG from "../assets/image 4.png";
import iconBD from "../assets/bulldozer.png";

const IconDT = new L.Icon({
    iconUrl: iconDT,
    iconRetinaUrl: iconDT,
    iconSize: new L.Point(57, 55),
});


const IconDG = new L.Icon({
  iconUrl: iconDG,
  iconRetinaUrl: iconDG,
  iconSize: new L.Point(57, 45),
});


const IconBD = new L.Icon({
  iconUrl: iconBD,
  iconRetinaUrl: iconBD,
  iconSize: new L.Point(57, 45),
});

export {IconDT, IconDG, IconBD };

export default L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

