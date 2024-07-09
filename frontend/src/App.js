// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSignup from './components/StudentSignup';
import Home from './components/Home';
import StudentLogin from './components/StudentLogin';
import Modal from './components/Modal'; // new modal component
import SearchResults from './components/SearchResults'; // New import for SearchResults

function App() {
  return (
    <BrowserRouter>
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
