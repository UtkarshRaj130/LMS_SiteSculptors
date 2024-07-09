import React from 'react';
import ImgSlide from './ImgSlide';
import Header from './Header';
import About from './About';
import Books from './Books'; // Import Books component
import SearchResults from './SearchResults'; // Import SearchResults component
import { Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <ImgSlide />
          <hr className="divider" />
          <About />
        </>} />
        <Route path="/books" element={<Books />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default Home;

