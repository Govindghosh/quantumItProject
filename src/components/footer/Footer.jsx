import React from 'react'
import logo from "../../assets/logo.png"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer-content">
        <div className="container-sm ">
        <h5 className='fw-bold'>About</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sed amet nam? Suscipit blanditiis porro cumque eveniet reprehenderit laboriosam iure ex, molestiae aperiam impedit quae voluptatum obcaecati sed repellat illo.</p>
        <img src={logo} alt="" />
        </div>
          <div className="footer-about" style={{padding: "50px"}}>
          
          </div>
          <div className="footer-links">
            <h5>ABOUT</h5>
            <ul className='no-bullets'>
              <li ><a href="#">Team</a></li>
              <li><a href="#">Join us</a></li>
              <li><a href="#">Ethic</a></li>
              <li><a href="#">Goals</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>ABOUT</h5>
            <ul>
              <li><a href="#">Team</a></li>
              <li><a href="#">Join us</a></li>
              <li><a href="#">Ethic</a></li>
              <li><a href="#">Goals</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>ABOUT</h5>
            <ul>
              <li><a href="#">Team</a></li>
              <li><a href="#">Join us</a></li>
              <li><a href="#">Ethic</a></li>
              <li><a href="#">Goals</a></li>
            </ul>
          </div>
          
        </div>
      </footer>
  )
}

export default Footer