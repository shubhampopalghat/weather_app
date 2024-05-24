import React, { useState } from 'react';
import './App.css';
import Main from './components/Main' ;
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import Box from './components/Box/Box';
import Foot from './components/Foot/Foot';
import Product from './components/Product/Product';
import Questionform from './components/Question_form/Questionform';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

const App = () => {
  const [showMain, setShowMain] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showBox, setShowBox] = useState(true);
  const [showFoot, setShowFoot] = useState(true);
  const [showProduct, setShowProduct] = useState(true);
  const [showQuestion, setShowQuestion] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault();
    setShowMain(true);
    setShowBox(true);
    setShowFoot(true);
    setShowProduct(true);
    setShowMap(false);
    setShowQuestion(true);
    setShowLogin(false);
  };

  const handleMapClick = (event) => {
    event.preventDefault();
    setShowMain(false);
    setShowMap(true);
    setShowBox(false);
    setShowProduct(false);
    setShowQuestion(true);
    setShowFoot(true);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleShowSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <div> 
      <Navbar onHomeClick={handleHomeClick} onMapClick={handleMapClick} onLoginClick={handleShowLogin} onSignupClick={handleShowSignup} /> 
      {showMain && <Main/>}
      {showMap && <Map/>}
      {showBox && <Box/>}
      {showProduct && <Product/>}
      {showQuestion && <Questionform/>}
      {showFoot && <Foot/>}
      {showLogin && <Login onClose={handleShowLogin} setShowLogin={setShowLogin} />}
      {showSignup && <Signup onClose={handleShowSignup} setShowSignup={setShowSignup} />}
    </div>
  );
};

export default App;