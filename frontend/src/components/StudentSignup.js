import React, { useState } from 'react';
import '../Styles/StudentSignup.css';
import { useNavigate } from 'react-router-dom';

function StudentSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const students = JSON.parse(localStorage.getItem('students')) || [];
      students.push({ name, email, password });
      localStorage.setItem('students', JSON.stringify(students));
      navigate('/student-login');
    } catch (error) {
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <div className='signup-page student-signup'>
      <div className='studentsignup'>
        <form onSubmit={handleSubmit}>
          <h1>Student Sign Up</h1>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            id="name"
            className='input-box'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
          <button type="submit">Sign up</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          Already have an account?
          <button type='button' onClick={() => navigate(-1)}>Login</button>
          <button type='button' onClick={() => navigate(-2)}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default StudentSignup;
