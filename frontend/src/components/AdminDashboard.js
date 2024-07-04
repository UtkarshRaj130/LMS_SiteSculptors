import React, { useState, useEffect } from 'react';
import '../Styles/AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newBook, setNewBook] = useState({ title: '', author: '', quantity: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch books and students data from API
    // axios.get('http://localhost:3000/books')
    //  .then(response => {
    //     setBooks(response.data);
    //   })
    //  .catch(error => {
    //     console.error(error);
    //   });
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/admin-login');
        }
      }, []);
      
    axios.get('http://localhost:3000/students')
     .then(response => {
        setStudents(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/books', newBook)
     .then(response => {
        setBooks([...books, response.data]);
        setNewBook({ title: '', author: '', quantity: 0 });
      })
     .catch(error => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#books">Books</a></li>
          <li><a href="#students">Students</a></li>
          <li><a href="#add-book">Add Book</a></li>
          <li><a href="#" onClick={handleLogout}>Logout</a></li>
        </ul>
      </nav>
      <section id="books">
        <h2>Books</h2>
        <input type="search" value={searchQuery} onChange={handleSearch} placeholder="Search books" />
        <ul>
          {books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase())).map(book => (
            <li key={book.id}>{book.title} ({book.quantity} copies)</li>
          ))}
        </ul>
      </section>
      <section id="students">
        <h2>Students</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.name} (Borrowed: {student.borrowedBooks.length} books)</li>
          ))}
        </ul>
      </section>
      <section id="add-book">
        <h2>Add Book</h2>
        <form onSubmit={handleAddBook}>
          <label>
            Title:
            <input type="text" value={newBook.title} onChange={(event) => setNewBook({...newBook, title: event.target.value })} />
          </label>
          <br />
          <label>
            Author:
            <input type="text" value={newBook.author} onChange={(event) => setNewBook({...newBook, author: event.target.value })} />
          </label>
          <br />
          <label>
            Quantity:
            <input type="number" value={newBook.quantity} onChange={(event) => setNewBook({...newBook, quantity: event.target.value })} />
          </label>
          <br />
          <button type="submit">Add Book</button>
        </form>
      </section>
    </div>
  );
}

export default AdminDashboard;