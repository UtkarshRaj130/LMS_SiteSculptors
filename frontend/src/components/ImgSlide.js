import React, { useState, useEffect } from 'react';
import image1 from './images/AdminBuilding.jpg';
import image2 from './images/image2iitdh.jpg';
import image3 from './images/image3iitdh.jpg';
import '../Styles/ImgSlide.css';

function ImgSlide() {
  const [libraryStatus, setLibraryStatus] = useState('');

  useEffect(() => {
    const checkLibraryStatus = () => {
      const currentTime = new Date().getHours();
      const currentDay = new Date().getDay();

      if (currentDay !== 0 && currentDay !== 6 && currentTime >= 9 && currentTime <= 18) {
        setLibraryStatus('Library is currently open (open from 9 am to 6 pm)');
      } else if (currentDay === 0 || currentDay === 6) {
        setLibraryStatus('Library is closed on Weekends');
      } else if (!(currentTime >= 9 && currentTime <= 18)) {
        setLibraryStatus('Library is currently closed');
      }
    };

    checkLibraryStatus();

    // Optionally, you can set an interval to update the status regularly
    const interval = setInterval(checkLibraryStatus, 60000); // Check every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image2} className="d-block w-100" alt="Library"/>
          <div className="carousel-caption">
            <h3>Library Status</h3>
            <p>{libraryStatus}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Library Collection"/>
          <div className="carousel-caption">
            <h5>Explore Our Collection</h5>
            <p>Discover a vast array of books of different departments, genres, authors, etc.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image1} className="d-block w-100" alt="Campus"/>
          <div className="carousel-caption">
            <h5>Discover Our Campus</h5>
            <p>Explore the beauty of our campus and its facilities.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImgSlide;
