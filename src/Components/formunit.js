import React from "react";

function FormUnit({setMap}) {
  const changeHandler = (e) =>{
    console.log(e.target.value)
    setMap(e.target.value)
  }
  return (
    <>
      {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <strong>Locations</strong>
          </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div className="px-3">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Locations
                </label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Select Location</option>
                  <option value="1">PIT A</option>
                  <option value="2">PIT B</option>
                  <option value="3">PIT C</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Nomor Unit</label>
                <input type="number" className="form-control" />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-primary">
                  Cari
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div className="">
        <select className="form-select" aria-label="Default select example" onChange={(e)=>changeHandler(e)}>
          <option defaultValue="">Semua PIT</option>
          <option value="pitA">PIT A</option>
          <option value="pitB">PIT B</option>
          <option value="pitC">PIT C</option>
        </select>
      </div>
    </>
  );
}

export default FormUnit;
