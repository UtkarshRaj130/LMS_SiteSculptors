// import React, { useState } from 'react';
// import '../Styles/StudentSignup.css';
// import { useNavigate } from 'react-router-dom';

// function StudentSignup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Add signup logic here
//     // For demo purposes, just add the new student to the list
//     const students = [
//       { email: 'student1@example.com', password: 'password123' },
//       { email: 'student2@example.com', password: 'password2' },
//       { email: 'student3@example.com', password: 'password3' },
//     ];
//     students.push({ email, password, name });
//     localStorage.setItem('students', JSON.stringify(students));
//     navigate('/student-login');
//   };

//   return (
//     <div className="student-signup login-box">
//       <h1>Student Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='name' >
//           Name:
//           <input type="text"  id="name" className='input-box'value={name} onChange={(event) => setName(event.target.value)} />
//         </label>
//         <br />
//         <label htmlFor='email' >
//           Email:
//           <input type="email"  id="email" className='input-box'value={email} onChange={(event) => setEmail(event.target.value)} />
//         </label>
//         <br />
//         <label htmlFor='password'>
//           Password:
//           <input type="password" id="password" className="input-box" value={password} onChange={(event) => setPassword(event.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Sign up</button>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//         <p>Already have an account? <button onClick={() => navigate('/student-login')}>Login</button></p>
//       </form>
//       <button className="close-modal" onClick={() => navigate(-1)}>Close</button>
//     </div>
//   );
// }

// export default StudentSignup;/
import React, { useState } from 'react';
// import '../Styles/StudentSignup.css';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const students = [
      { email: 'student1@example.com', password: 'password123' },
      { email: 'student2@example.com', password: 'password2' },
      { email: 'student3@example.com', password: 'password3' },
    ];
    students.push({email,password,name});localStorage.setItem('students',JSON.stringify(students));
    navigate('/student-login');
  };

  return(
    <div className='login-page student-signup'>
      <div className='student-signup '>
        <form onSubmit={handleSubmit}>
          <h1>Student Signup</h1>
          <label htmlFor='name'>
            Name:
            <input type="text" id="name" className='input-box' value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <br />
          <label htmlFor='email'>
            Email:
            <input type="email" id="email" className='input-box' value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <br />
          <label htmlFor='password'>
            Password:
            <input type="password" id="password" className="input-box" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <button type="submit">Sign up</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <p>Already have an account? <button onClick={() => navigate('/student-login')}>Login</button></p>
          <button type='close' onClick={() => navigate(-1)}>close page</button>
        </form>
      </div>
    </div>




  );
}

export default StudentLogin;