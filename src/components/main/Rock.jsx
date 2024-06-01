import React from "react";

export default function Rock() {
  return (
    <>
      <div className="ms-5">
        <div style={{ display: "flex" }} className="ms-5">
          {/* Content on the right */}
          <div style={{ flex: 1 }}>
            <div>
              <p className="fs-2 fw-bold" style={{ width: "3vw" }}>
                ROCK CLIMBING
              </p>
            </div>
            <div>
              <p className="fs-4 fw-bold">1. CLASSES & EVENTS</p>
            </div>
            <div>
              <p style={{ width: "22vw" }}>
                Hatha is the most classic yoga. Its origin is in the Raya Yoga
                of Patanjali and other classical texts such as Bhagavad Gita and
                Hatha Yoga Pradipika.
              </p>
            </div>
            <div className=" bg-info bg-opacity-10 border border-info" style={{ width: "22vw" }}></div>
            <div className="mt-3">
                <p >
                    <span>10 modules</span>
                    <span style={{display: "block"}}>divided into 7 weekends</span>
                 
                </p>

                </div>
            <div className="d-flex flex-row">
              <div className="fw-bold me-5"style={{width:"4vw"}}>
                <p>Starts April 15 at 20.00</p>
              </div>
              <div className="fw-bold"style={{width:"4vw"}}>Price: $900</div>
            </div>
          </div>
          {/* Content on the left */}
          <div style={{ flex: 1 }}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Rock climbing"
                style={{ width: "40vh", height: "40vh", borderRadius: "50%" }}
              />
            </div>
            <div>
              <p className="mt-5 ms-5 fw-bold text-warning fs-3" style={{width:"20vw"}}>WALKING IN NATURE AS A RECREATIONAL ACTIVITY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
