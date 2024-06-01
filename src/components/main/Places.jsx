import React from 'react'
import "./Guide.css"

function Places() {
  return (
<>
<div className='container' style={{ marginLeft: '5%', height: '100vh', width: '100vw', overflowX: 'auto' }}>
      <div style={{ paddingTop: "3%" }}>
        <p className="h2 fw-bold mt-5" style={{width:"24%"}}>PLACES TO VISIT IN AUTUMN</p>
        {/* <p className="h2 fw-bold">CLASSES</p> */}
      </div>
      <div className="row" style={{ paddingTop: "5%", paddingLeft: "10%" }}>
        <div className="col-3 d-flex align-items-center justify-content-center m-4">
          <div className="card" style={{ border: "white" }}>
            <img src="https://img.freepik.com/free-photo/three-friends-sitting-top-mountain-enjoying-scenic-view_23-2148139706.jpg?t=st=1717213438~exp=1717217038~hmac=93af81625836b35dc4ff0f9887c67fa163903f9f5bc243d1f818726aeae3463f&w=996" className="card-img-top img-thumbnail img-fluid" alt="activities" style={{ border: "white", width: "250px",height:"250px", borderRadius:"50%" }} />
            <div className="card-body text-center">
              <p className="card-text fw-bold h3">Mountain Loop</p>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed!</p>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center m-4">
          <div className="card" style={{ border: "white" }}>
            <img src="https://outdoors.org/wp-content/uploads/2022/12/1.-Lead-Photo_Photo-by-Paula-Champagne_7G8A2987-e1651679095872.jpg" className="card-img-top img-thumbnail img-fluid" alt="hiking" style={{ border: "white", width: "250px",height:"250px", borderRadius:"50%" }} />
            <div className="card-body text-center">
              <p className="card-text fw-bold h3">National Park</p>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed!</p>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center m-4">
          <div className="card" style={{ border: "white" }}>
            <img src="https://www.gohikingsandiego.com/wp-content/uploads/2022/01/Annies-Slot-Canyons-2048x1536.jpg" className="card-img-top img-thumbnail img-fluid" alt="mountains" style={{ border: "white", width: "250px",height:"250px", borderRadius:"50%" }} />
            <div className="card-body text-center">
              <p className="card-text fw-bold h3">Canyon Trail</p>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed!</p>
            </div>
          </div>
        </div>
        <div className='col-12 d-flex justify-content-center'>
            <button className='transparent-button border border-info border rounded-end'>see more</button>
        </div>
      </div>
    </div>
</>
  )
}

export default Places
