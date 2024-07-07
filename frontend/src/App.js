
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSignup from './components/StudentSignup';
import Home from './components/Home';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';
import './App.css';
// new modal component
// import StudentDashboard from './components/StudentDashboard';
// import About from './components/About';
function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" exact component={SearchBar} />
        <Route path="/student-login" element={
          <Modal>
            <StudentLogin />
          </Modal>
        } />
        <Route path="/student-signup" element={
          <Modal>
            <StudentSignup/>
          </Modal>
        } />
{/*         
        <Route path="/admin-login" element={
          <Modal>
            <AdminLogin />
          </Modal>
        } /> */}
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/about" element={<About />} /> */}
    //     <Route path="/student-login" element={<StudentLogin />} />
    //     <Route path="/student-signup" element={<StudentSignup />} />
    //     <Route path="/admin-login" element={<AdminLogin />} />
    //     <Route path="/student-dashboard" element={<StudentDashboard />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;