import React from "react";
import './Navbar.css'

const contactFunc = () => {
  window.location.href = 'https://contact-us.com';
}

const linkedinFunc = () => {
  window.location.href = 'https://linkedin.com';
}

const xFunc = () => {
  window.location.href = 'https://x.com';
}

const youtubeFunc = () => {
  window.location.href = 'https://youtube.com';
}

function Navbar({ onHomeClick, onMapClick, onLoginClick, onSignupClick }) {
  return (
    <div className="nav">
      <nav>
        <div className="logo"> Parkfinder </div>
        <div className="nav-items">
          <ul>
            <li className="home" onClick={onHomeClick}>  Home  </li>
            <li className="about-us" onClick={onMapClick}>  Map  </li>
            <li className="contact" onClick={contactFunc}>  contact  </li>
            <li className="social" onClick={linkedinFunc}> <i className="fa-brands fa-facebook"></i> </li>
            <li className="social" onClick={xFunc}><i className="fa-brands fa-twitter"></i> </li>
            <li className="social" onClick={youtubeFunc}><i className="fab fa-linkedin"></i></li>
            {/* <li className="social" onClick={instaFunc}><i className="fa-brands fa-instagram"></i> </li> */}
          </ul>
        </div>
        <div className="btn-login-signup">
          <button className="login" onClick={onLoginClick}> Login </button>
          <button className="sign-up" onClick={onSignupClick}> Sign-up </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;