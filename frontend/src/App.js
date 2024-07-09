import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSignup from './components/StudentSignup';
import Home from './components/Home';
import StudentLogin from './components/StudentLogin';
import Modal from './components/Modal';
import SearchResults from './components/SearchResults';
import Books from './components/Books';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/search" element={<SearchResults />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
