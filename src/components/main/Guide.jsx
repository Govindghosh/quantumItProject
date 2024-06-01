import React from 'react';
import './Guide.css';

function Guide() {
  return (
    <div className="guide-container">
      <img
        src="https://media.istockphoto.com/id/1071461664/photo/having-a-tour-through-the-city-streets.jpg?s=612x612&w=0&k=20&c=nlr914eKeQkYVpv7UgKCGU1oWLd97eRCi5e3jRggEhw="
        alt="City Tour"
        className="guide-image"
      />
      <div className="overlay"></div>
      <div className='guide'>
        <p className='fw-bold fs-2'>BIG BEND NATIONAL PARK HIKING GUIDE</p>
        <p className='fw-bold fs-4 mt-5'>THIS HIKE IS THE NEXT BEST OPTION.</p>
        <p className='fw-bold fs-4 mt-2'>Lorem, ipsum.</p>
        <button className="see-more-button mt-5 ms-5  border border-info">See More</button>
        </div>
      
    </div>
  );
}

export default Guide;
