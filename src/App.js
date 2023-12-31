import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Maps from "./Components/map";
import Unit from "./Components/unit";
import "./assets/style.css";
import MapsPitA from "./Components/mapPitA";
import MapsPitB from "./Components/mapPitB";
import MapsPitC from "./Components/mapPitC";
function App() {
  const [maps, setMap] = useState("");
  return (
    <>
      <div className="text mt-2 px-3">
        <h2>Maps</h2>
      </div>
      <div className="row mt-5 px-3">
        <div className="col-sm-4">
          <Unit maps={maps} setMap={setMap} />
        </div>
        <div className="col-sm-8">
          {maps === "pitA" ? (
            <>
              <MapsPitA />
            </>
          ):maps ==="pitB"?(
            <MapsPitB/>
          ):maps === "pitC"?(
            <MapsPitC/>
          ):(
            <>
              <Maps />
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default App;
