import React from 'react';
// import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function StudentDashboard() {
  const isLoggedIn = localStorage.getItem('studentToken') === 'authenticated';
  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/student-login" />;
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome, you are logged in!</p>
      <button onClick={() => localStorage.removeItem('studentToken')}>Logout</button>
    </div>
  );
}

export default StudentDashboard;