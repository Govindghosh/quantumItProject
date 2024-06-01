import React from 'react'
import acitivities from "../../assets/acitivities.png";
import hiking from "../../assets/hiking.png";
import mountains from "../../assets/mountains.png";

function Hiking() {
  return (
    <>
    <div className='container' style={{ marginLeft: '5%', height: '100vh', width: '100vw', overflowX: 'auto' }}>
      <div style={{ paddingTop: "3%" }}>
        <p className="h2 fw-normal">HIKING AND CAMPING</p>
        <p className="h2 fw-bold">CLASSES</p>
      </div>
      <div className="row" style={{ paddingTop: "5%", paddingLeft: "10%" }}>
        <div className="col-3 d-flex align-items-center justify-content-center m-4">
          <div className="card" style={{ border: "white" }}>
            <img src={acitivities} className="card-img-top img-thumbnail img-fluid" alt="activities" style={{ border: "white", width: "250px" }} />
            <div className="card-body text-center">
              <p className="card-text fw-bold h3">Activities</p>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed!</p>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center m-4">
          <div className="card" style={{ border: "white" }}>
            <img src={hiking} className="card-img-top img-thumbnail img-fluid" alt="hiking" style={{ border: "white", width: "250px" }} />
            <div className="card-body text-center">
              <p className="card-text fw-bold h3">Hiking</p>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed!</p>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center m-4">
          <div className="card" style={{ border: "white" }}>
            <img src={mountains} className="card-img-top img-thumbnail img-fluid" alt="mountains" style={{ border: "white", width: "250px" }} />
            <div className="card-body text-center">
              <p className="card-text fw-bold h3">Mountains</p>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hiking
