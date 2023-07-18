import React from "react";
import dumbtruck from "../assets/image 3.png";
import digger from "../assets/image 4.png";
import bulldozzer from "../assets/image 5.png";
import DTpitA from "../fakejson/DT/pitA";
import DGpitA from "../fakejson/DG/pitA";
import BDpitA from "../fakejson/BD/pitA";

function AccordionTruck() {
  return (
    <>
      {/* <div className="d-grid gap-3">
            <div className="d-flex">
              <img src={dumbtruck} className="img-thumbnail"></img>
              <div className="p-2">Dumb Truck</div>
              <div className="p-2 ms-auto justify-content-end">6</div>
            </div>
            <div className="d-flex">
              <img src={digger} className="img-thumbnail" alt="..." />
              <div className="p-2">Digger Truck</div>
              <div className="p-2 ms-auto justify-content-end">6</div>
            </div>
            <div className="d-flex">
              <img src={bulldozzer} className="img-thumbnail" alt="..." />
              <div className="p-2">Bulldozer</div>
              <div className="p-2 ms-auto justify-content-end">6</div>
            </div>
          </div> */}
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <div className="d-grid d-flex">
                {/* <img src={dumbtruck} className="img-thumbnail"></img> */}
                <div className="p-2">Dumb Truck</div>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="d-grid d-flex">
                <img src={dumbtruck} className="img-thumbnail"></img>
                {DGpitA?.map((v, i) => {
                  return (
                    <>
                      <div className="p-2">{v.noUnit}</div>
                    </>
                  );
                })}
                <div className="p-2 ms-auto justify-content-end">
                  {DGpitA.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              DIGGER TRUCK
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="d-grid d-flex">
                <img src={digger} className="img-thumbnail"></img>
                {DTpitA?.map((v, i) => {
                  return (
                    <>
                      <div className="p-2">{v.noUnit}</div>
                    </>
                  );
                })}
                <div className="p-2 ms-auto justify-content-end">
                  {DTpitA.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              BULLDOZER
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="d-grid d-flex">
                <img src={bulldozzer} className="img-thumbnail"></img>
                {BDpitA?.map((v, i) => {
                  return (
                    <>
                      <div className="p-2">{v.noUnit}</div>
                    </>
                  );
                })}
                <div className="p-2 ms-auto justify-content-end">
                  {BDpitA.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionTruck;
