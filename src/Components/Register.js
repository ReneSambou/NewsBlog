import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/signup.json';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password is too short
    if (password.length < 8) {
      toast.error('Password is too short (minimum 8 characters)');
      return;
    }

    try {
      // Check if username (id) already exists
      const response = await fetch(`https://jsonbin.io/app/bins/66a649e8e41b4d34e4183950/${id}`);
      if (response.ok) {
        // Username already exists
        toast.error('Username already exists');
        return;
      }

      // Proceed with registration
      const reg = { id, password };
      const registerResponse = await fetch('https://jsonbin.io/app/bins/66a649e8e41b4d34e4183950', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reg),
      });

      if (registerResponse.ok) {
        // Registration successful
        toast.success('Registered Successfully');
        navigate('/Login');
      } else {
        // Registration failed
        throw new Error('Registration failed');
      }
    } catch (error) {
      // Error occurred during registration process
      toast.error('Registration Failed: ' + error.message);
    }
  };

  return (
    <div className='LoginBody'>
      <div className='lg-lottie'>
        <Lottie animationData={animationData} />
      </div>
      <div className='lg-container'>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className='lg-input-box'>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type='text'
              placeholder='Username'
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='lg-input-box'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Choose Password'
              required
            />
            <FaLock className='icon' />
          </div>

          <div className='lg-button'>
            <button type='submit'>Register</button>
          </div>
          <div className='lg-register-link'>
            <p>
              Already have an account? <Link to='Login'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
