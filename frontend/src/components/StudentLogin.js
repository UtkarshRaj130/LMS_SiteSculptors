import React, { useState } from 'react';
import '../Styles/StudentLogin.css';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add login logic here
    const students = [
      { email: 'student1@example.com', password: 'password123' },
      { email: 'student2@example.com', password: 'password2' },
      { email: 'student3@example.com', password: 'password3' },
    ];
    const student = students.find((student) => student.email === email && student.password === password);
    if (!student) {
      setError('Invalid email or password');
    } else {
      localStorage.setItem('studentToken', 'authenticated');
      navigate('/student-dashboard');
    }
  };
  const handleNotSignedIn = () => {
    navigate('/student-signup');
  };

  return (
    <div className='login-page student-login'>
    <div className=' studentlogin '>
    
    <form onSubmit={handleSubmit}>
    <h1> LOG IN</h1>  
    <label htmlFor='email' >Email</label>
    <input type="email" id="email" className='input-box'value={email} onChange={(event) => setEmail(event.target.value)} ></input>
    <label htmlFor='password'>password</label>
    <input type="password" id="password" className="input-box" value={password} onChange={(event) => setPassword(event.target.value)} ></input>
    <button type='submit'>Login</button>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <button type='button' onClick={handleNotSignedIn}> Sign up!</button>
    <button className='close-modal' onClick={() => navigate(-1)}>close page</button>

    </form>

    </div>
    </div>

    

  );
}

export default StudentLogin;