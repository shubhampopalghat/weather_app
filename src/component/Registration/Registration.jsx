import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file for styling

function Registration() {
  const [parkingLotId, setUsername] = useState('');
  const [name, setName] = useState('')
  const [carNo, setCarNo] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleCarNoChange = (event) => {
    setCarNo(event.target.value);
  };

  const handleNameChange = (event) =>{
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
    console.log('Parking Lot Id:', parkingLotId);
    console.log('Name:', name);
    console.log('Car No')
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields after submission
    setUsername('');
    setName('');
    setCarNo('');
    setEmail('');
    setPassword('');

  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="parkinglotId">Parking Lot Id:</label>
        <input
          type="text"
          id="username"
          value={parkingLotId}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="carNo">Car No.:</label>
        <input
          type="number"
          id="number"
          value={carNo}
          onChange={handleCarNoChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
