import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setLogInEmail] = useState('');
  const [password, setLogInPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/name/login', {
        email,
        password,
      });
      console.log(response.data);
      alert('Logged in successfully');
      navigate('/LoginSuccess');
    } catch (error) {
      setError('Please check your email and password');
    }
  };

  return (
    <section className="login">
      <div className="formlogin">
        <h2 className="h2login">Create an account</h2>
        <div className="Inputlogin">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="email"
            className="Inputsi"
            value={email}
            onChange={(e) => setLogInEmail(e.target.value)}
          />

          <label>Your Password</label>
          <input
            type="password"
            placeholder="password"
            className="Inputsi"
            value={password}
            onChange={(e) => setLogInPass(e.target.value)}
          />

          <label>
            <input className="" type="checkbox" value="" />
            I agree to all statements in{' '}
            <a href="#!" className="text-body">
              <u>Terms of service</u>
            </a>
          </label>

          <button type="submit" className="btnsignup" onClick={handleLogin}>
            Login
          </button>

          <div style={{ color: 'red' }}>{error && <p>{error}</p>}</div>
        </div>
      </div>
    </section>
  );
};

export default Login;