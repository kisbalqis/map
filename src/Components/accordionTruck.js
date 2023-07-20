import React from "react";
import dumbtruck from "../assets/image 3.png";
import digger from "../assets/image 4.png";
import bulldozzer from "../assets/image 5.png";
import DTpitA from "../fakejson/DT/pitA";
import DTpitB from "../fakejson/DT/pitB";
import DTpitC from "../fakejson/DT/pitC";
import DGpitA from "../fakejson/DG/pitA";
import DGpitB from "../fakejson/DG/pitB";
import DGpitC from "../fakejson/DG/pitC";
import BDpitA from "../fakejson/BD/pitA";
import BDpitB from "../fakejson/BD/pitB";
import BDpitC from "../fakejson/BD/pitC";
import { useEffect } from "react";
import { useState } from "react";

function AccordionTruck({ maps }) {
  const [dataDT, setDataDT] = useState([]);
  const [dataDG, setDataDG] = useState([]);
  const [dataBD, setDataBD] = useState([]);
  useEffect(() => {
    getData();
  }, [maps]);
  const getData = () => {
    if (maps === "pitA") {
      setDataDT(DTpitA);
      setDataDG(DGpitA);
      setDataBD(BDpitA);
    } else if (maps === "pitB") {
      setDataDT(DTpitB);
      setDataDG(DGpitB);
      setDataBD(BDpitB);
    } else if (maps === "pitC") {
      setDataDT(DTpitC);
      setDataDG(DGpitC);
      setDataBD(BDpitC);
    } else {
      setDataDT([...DTpitA, ...DTpitB, ...DTpitC]);
      setDataDG([...DGpitA, ...DGpitB, ...DGpitC]);
      setDataBD([...BDpitA, ...BDpitB, ...BDpitC]);
    }
  };
  console.log(maps);
  return (
    <>
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
              DUMB TRUCK
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
                <div className="p-2">{dataDT.length}</div>
              </div>
              <div className="row">
                {dataDT?.map((v, i) => {
                  return (
                    <>
                      <div className="col-4">
                        <a>{v.noUnit}</a>
                      </div>
                    </>
                  );
                })}
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
                <div className="p-2">{dataDG.length}</div>
              </div>
              <div className="row">
                {dataDG?.map((v, i) => {
                  return (
                    <>
                      <div className="col-4">
                        <a>{v.noUnit}</a>
                      </div>
                    </>
                  );
                })}
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
                <div className="p-2">{dataBD.length}</div>
              </div>
              <div className="row">
                {dataBD?.map((v, i) => {
                  return (
                    <>
                      <div className="col-4">
                        <a>{v.noUnit}</a>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionTruck;
