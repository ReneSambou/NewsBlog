import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/login.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doSignInWithEmailAndPassWord,  } from '../Auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const result = await doSignInWithEmailAndPassWord(email, password);
                if (result) {
                    navigate('/AdminEvent'); // Adjust the path to your blogs page
                } else {
                    toast.error(result.message || "Failed to sign in");
                }
            } catch (error) {
                toast.error(error.message || "An unexpected error occurred");
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className='LoginBody'>
            <ToastContainer />
            <div className='lg-lottie'>
                <Lottie animationData={animationData} />
            </div>
            <div className='lg-container'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="lg-input-box">
                        <input
                            type='text'
                            placeholder='Email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <FaLock className='icon' />
                    </div>
                    <div className="lg-remember-forgot">
                        <label>
                            <input type='checkbox' />
                            Remember me
                        </label>
                    </div>
                    <div className="lg-button">
                        <button type='submit' disabled={isSigningIn}>
                            {isSigningIn ? "Signing in..." : "Login"}
                        </button>
                    </div>
                    <div className="lg-register-link">
                        <p>Don't have an account? <Link to="/register">Register now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
