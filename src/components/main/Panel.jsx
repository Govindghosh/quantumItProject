import React from 'react'
import "./Guide.css"
import mountains from "../../assets/Shape.png"
function Panel() {
  return (
    <>
    <div className="guide-container">
      <img
        src="https://media.istockphoto.com/id/1071461664/photo/having-a-tour-through-the-city-streets.jpg?s=612x612&w=0&k=20&c=nlr914eKeQkYVpv7UgKCGU1oWLd97eRCi5e3jRggEhw="
        alt="City Tour"
        className="guide-image"
      />
      <div className="overlay"></div>
      <div className="guide d-flex  justify-content-between" style={{ width: "40%" }}>
        <p className="fw-bold fs-2">
          THE ASANAS PURITY OUR BODY AND KEEP IT HEALTHY, MAKING IT A SUITABLE VEHICLE FOR THE SOUL.
        </p>
        <img src={mountains} alt="" style={{ filter: 'opacity(0.5)'}} />
        <div className='mt -5 ms-5'>
        <div className='mt -5 ms-5'>

        <button className="see-more-button mt-5 ms-3 border border-info">See More</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Panel
