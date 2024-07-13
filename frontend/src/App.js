import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentSignup from './components/StudentSignup';
import Home from './components/Home';
import Header from './components/Header';
import StudentLogin from './components/StudentLogin';
import Modal from './components/Modal';
import SearchResults from './components/SearchResults';
import BookDetails from './components/BookDetails'; // Import BookDetails component
import MyBook from './components/MyBook';

function App() {
  return (
    <BrowserRouter>
      <Header />
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
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/book-details/:id" element={<BookDetails />} /> {/* New route for BookDetails */}
        <Route path="/mybook/:bookId" element={<MyBook />} />
        <Route path="/" element={<SearchResults />} />
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/reserved-books" element={<ReservedBooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
