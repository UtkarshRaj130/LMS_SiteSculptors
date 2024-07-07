import React from 'react'
import ImgSlide from './ImgSlide';
import Header from './Header';
import About from './About';
import axios from 'axios';
import SearchBar from './SearchBar';
function Home() {
  return (
    <div>
    <Header/>
    <ImgSlide/>
    <About/>

    </div>
  )
}
const BookSearch = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const { data } = await axios.get(`/api/books/search`, { params: { query } });
    setBooks(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {books.map((book) => (
          <div key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;

export default Home