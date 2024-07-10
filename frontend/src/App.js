// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSignup from './components/StudentSignup';
import Home from './components/Home';
import Header from './components/Header'
import StudentLogin from './components/StudentLogin';
import Modal from './components/Modal'; // new modal component
import SearchResults from './components/SearchResults'; // New import for SearchResults

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Home from './components/Home';
// import StudentLogin from './components/StudentLogin';
// import AdminLogin from './components/AdminLogin';

// function App() {
//   return (
//     <BrowserRouter>
     
//       <Home/>
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/student-login" element={<StudentLogin />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//       </Routes>
//     </BrowserRouter>

   
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSignup from './components/StudentSignup';
import Home from './components/Home';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import Modal from './components/Modal'; // new modal component
// import StudentDashboard from './components/StudentDashboard';
// import About from './components/About';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={
          <Modal>
            <StudentLogin />
          </Modal>
        } />
        <Route path="/student-signup" element={
          <Modal>
            <StudentSignup />
          </Modal>
        } />
        <Route path="/search-results" element={<SearchResults />} /> {/* New route for SearchResults */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;