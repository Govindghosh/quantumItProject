import React from 'react';
import mountains from "../../assets/mountains.png";
import hiking from "../../assets/hiking.png";
import acitivities from "../../assets/acitivities.png";
import "./Guide.css";

function Gear() {
  return (
    <div className="ms-5">
      <div style={{ display: "flex" }} className="ms-5">
        {/* Content on the right */}
        <div style={{ flex: 1 }}>
          <div>
            <p className="fs-2 fw-bold mt-5" style={{ width: "28vw" }}>
              HOW TO RECOVER FROM A HIKE
            </p>
          </div>
          <div className='bg-info bg-opacity mb-5' style={{ height: "6px", width: "4vw",fontfamily: "Averia Sans Libre"}}></div>
          <div style={{ width: "50vh" }}>
            <div className='d-flex justify-content-between'>
              <div>
                <img src={mountains} alt="Mountains" className="guide-image" />
              </div>
              <div>
                <ul>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <div>
                <img src={hiking} alt="Hiking" className="guide-image" />
              </div>
              <div>
                <ul>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <div>
                <img src={acitivities} alt="Activities" className="guide-image" />
              </div>
              <div>
                <ul>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                  <li className='myGearLi'>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Content on the left */}
        <div className='mt-5' style={{ flex: 1 }}>
          <div style={{ textAlign: "center" }}className='mt-5'>
            <img
              src="https://previews.123rf.com/images/nk2549/nk25491804/nk2549180400002/99092833-father-and-daughter-hiking-climbing-in-mountains-together-success-idea-concept.jpg"
              className="card-img-top mt-5"
              alt="Rock climbing"
              style={{ width: "40vh", height: "40vh", borderRadius: "50%" }}
            />
          </div>
          <div className='align-middle ms-5'>
            <p className="mt-5 ms-5 fw-bold text-warning fs-3 ms-5" style={{ width: "20vw" }}>
              WALKING IN NATURE AS A RECREATIONAL ACTIVITY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gear;
