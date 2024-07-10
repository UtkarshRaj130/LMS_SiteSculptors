import React, { useState } from 'react';
import '../Styles/AdminLogin.css';
import {useNavigate } from 'react-router-dom';
// import axios from 'axios';



function AdminLogin() {
//   const [email, setUsername] = useState('');
//   const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);

  const navigate = useNavigate();


  const handleSubmit = async(event) => {
    event.preventDefault();
    // Add login logic here
    // try {
    //     const response = await axios.post('http://localhost:3000/login', { email, password, role: 'admin' });
    //     console.log(response.data);
    //     const { token } = response.data;
    //   localStorage.setItem('adminToken', token);
    //   navigate('/admin-dashboard');
    //     // Redirect to admin dashboard
    //   } catch (err) {
    //     setError(err.response.data);
    //   }
    // console.log('Admin Login submitted:', email, password);

    const admins = [
      { email: 'admin1@example.com', password: 'password123' },
      { email: 'admin2@example.com', password: 'password2' },
      { email: 'admin3@example.com', password: 'password3' },
    ];
    const admin = admins.find((admin) => admin.email === email && admin.password === password);
    if (!admin) {
      setError('Invalid email or password');
    } else {
      localStorage.setItem('adminToken', 'authenticated');
      navigate('/admin-dashboard');
      
    }
  };

  return (
    
    <div className='login-page admin-login'>
    <div className='adminlogin '>
    
    <form onSubmit={handleSubmit}>
    <h1> LOG IN</h1>  
    <label htmlFor='email' >Email</label>
    <input type="email" id="email" className='input-box'value={email} onChange={(event) => setEmail(event.target.value)} ></input>
    <label htmlFor='password'>password</label>
    <input type="password" id="password" className="input-box" value={password} onChange={(event) => setPassword(event.target.value)} ></input>
    <button type='submit'  >Login</button>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <button type='close' onClick={() => navigate(-1)}>close page</button>

    </form>

    </div>
    </div>
  );
}

export default AdminLogin;



  