import React, { useState } from 'react';
import './Signup.css';
import Login from './Login';

const Signup = ({ onClose }) => {
  const [showSignup, setShowSignup] = useState(true); // State to track whether to show signup form
  const [showLogin, setShowLogin] = useState(false); // State to track whether to show login form
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    setShowSignup(false); // Hide signup form
     // Call the onClose function passed from parent component
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCarNumberChange = (event) => {
    setCarNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Car Number:', carNumber);
    console.log('Password:', password);
    // Reset form fields after submission
    setFullName('');
    setUsername('');
    setEmail('');
    setCarNumber('');
    setPassword('');
  };

  const handleShowLogin = () => {
    setShowSignup(false); // Hide signup form
    setShowLogin(true); // Show login form
  };

  return (
    <>
      {showSignup && (
        <div className="deem">
          <div className="signup">
            <div className="signup-text">Sign up Here</div>
            <form onSubmit={handleSignup}>
              <div className="signup-input-data">
                <input type="text" required value={fullName} onChange={handleFullNameChange} />
                <label> Full Name </label>
                <div className="signup-underline"></div>
              </div>
              <div className="signup-input-data">
                <input type="text" required value={username} onChange={handleUsernameChange} />
                <label> Username </label>
                <div className="signup-underline"></div>
              </div>
              <div className="signup-input-data">
                <input type="text" required value={email} onChange={handleEmailChange} />
                <label> Email address </label>
                <div className="signup-underline"></div>
              </div>
              <div className="signup-input-data">
                <input type="text" required value={carNumber} onChange={handleCarNumberChange} />
                <label> Car number </label>
                <div className="signup-underline"></div>
              </div>
              <div className="signup-input-data">
                <input type="password" required value={password} onChange={handlePasswordChange} />
                <label> Password </label>
                <div className="signup-underline"></div>
              </div>
              <div id="signup-btn" className="signup-form-row">
                <div className="signup-input-data">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
            <div className="close-btn-signup" onClick={handleClose}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      )}
      {/* Conditionally render Login component only if showLogin state is true */}
      {showLogin && <Login onClose={handleClose} setShowLogin={setShowLogin} />}
    </>
  );
};

export default Signup;
