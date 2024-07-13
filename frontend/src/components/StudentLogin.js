import React, { useState } from 'react';
import '../Styles/StudentLogin.css';
import { useNavigate } from 'react-router-dom';
import axios from './axiosInstance'; 

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/auth', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/'); // Redirect to the home page or dashboard after login
    } catch (error) {
      setError('Login failed. Please check your email and password.');
    }
  };

  const handleNotSignedIn = () => {
    navigate('/student-signup');
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    navigate(-1); // Navigate back to the last visited page when modal is closed
  };

  return (
    <div className='login-page student-login'>
      <div className='studentlogin'>
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            id="email"
            className='input-box'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type="password"
            id="password"
            className="input-box"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type='submit'>Login</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}

          New User?
          <button type='button' onClick={handleNotSignedIn}>Sign up</button>
          <button className='close-modal' onClick={handleCloseModal}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;
