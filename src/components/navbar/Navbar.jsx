import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
function Navbar() {
  return (
<>
<div className='full-screen'>
<div className='navbarLink'style={{backgroundColor:"#1f262f"}}>
  <div className='polyForText'>
  <p className='fw-bold  m-5 discover'>Discover you next hike</p>
  </div>
  <div>
  <nav className="navbar navbar-expand-lg ms-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav text-white">
      <li className="nav-item">
        <div className='nav-item nav-link clip-path'> <img src={logo} alt="" style={{height:"1%"}}/></div>
        </li>
        <li className="nav-item ps-5 pt-3">
          <a className="nav-link text-white active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ps-5 pt-3">
          <a className="nav-link text-white" href="#">Class</a>
        </li>
        <li className="nav-item ps-5 pt-3">
          <a className="nav-link text-white" href="#">Promo</a>
        </li>
        <li className="nav-item ps-5 pt-3">
          <a className="nav-link text-white" href="#">Online</a>
        </li>
        <li className="nav-item ps-5 pt-3">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </div>
<img className="guide-image guideImage" src="https://c0.wallpaperflare.com/preview/281/180/973/boy-man-happy-solo.jpg" alt="Nature Walk"/>
</div>
</div>
</>
  )
}

export default Navbar
