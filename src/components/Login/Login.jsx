import React from 'react';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = ({ onClose, setShowLogin, handleShowSignup }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClose = () => {
    onClose();
    setShowLogin(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login authentication here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="deem">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="form-container">
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" value={username} onChange={handleUsernameChange} />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={password} onChange={handlePasswordChange} />
          <div className="social">
            <div className="go" onClick={handleLogin}>
              <i className="fas fa-sign-in-alt"></i> Login
            </div>
            <div className="fb" onClick={handleShowSignup}>
              <i className="fas fa-user"></i> Sign up
            </div>
          </div>
        </div>
        <div className="close-btn" onClick={handleClose}>
          <i className="fas fa-times"> </i>
        </div>
      </div> 
    </div>
  );
};

export default Login;
