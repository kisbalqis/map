import React from "react";

import ModalForm from "./modal";
import FormUnit from "./formunit";
import AccordionTruck from "./accordionTruck";

function Unit({setMap}) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <strong>Truck</strong>
          </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          {/* <div className="my-3">
            <ModalForm/>
          </div> */}
          <div className="my-3">
            <FormUnit setMap={setMap}/>
          </div>
          
          <div>
          <h5 className="card-title">
            <strong>Unit</strong>
          </h5>
            <AccordionTruck/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Unit;
