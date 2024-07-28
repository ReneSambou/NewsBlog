import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/login.json';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  console.log('Login component rendered');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Load user data from JSON file
    const response = await axios.get('http://localhost:8000/user');
    const users = response.data;
  
    // Check if the entered username and password match any user data
    const user = users.find(user => user.id === username && user.password === password);
    if (user) {
      // Successful login, display toast message and set isAuthenticated to true
      toast.success('Login successful!', {
      });
  
      // Navigate to the Event page after 2 seconds (same as autoClose time)
      setTimeout(() => {
        navigate('/AdminEvent');
      }, 2000);
  
      setIsAuthenticated(true);
    } else {
      // Display error message for invalid credentials
      alert('Invalid username or password. Please try again.');
    }
  };

  return ( 
    <div className='LoginBody'> 
      <div className='lg-lottie'>
        <Lottie animationData={animationData} />
      </div>
      <div className='lg-container'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="lg-input-box">
            <input 
              type='text' 
              placeholder='Username' 
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className='icon' />
          </div>
          <div className="lg-input-box">
            <input 
              type='password' 
              placeholder='Password' 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon'/>
          </div>
          <div className="lg-remember-forgot">
            <label>
              <input type='checkbox'/>
              Remember me
            </label>
          </div>
          <div className="lg-button">
            <button type='submit'>Login</button>
          </div>
          <div className="lg-register-link">
            <p>Don't have an account? <Link to="/Login/Register">Register now</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
