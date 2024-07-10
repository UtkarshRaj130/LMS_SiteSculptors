// import React from 'react'
import React, { useState, useEffect } from 'react';
import image1 from './image1iitdh.jpeg';
import image2 from './image2iitdh.jpg';
import image3 from './image3iitdh.jpg';


import '../Styles/ImgSlide.css'


function ImgSlide() {
  const [libraryStatus, setLibraryStatus] = useState('');
  
  useEffect(() => {
    const currentTime = new Date().getHours();
    

    if (currentTime >= 9 && currentTime <= 18) {
      setLibraryStatus('Library is currently open ( open from 9am to 6pm)');
    } else {
      setLibraryStatus('Library is currently closed (open from 9am to 6pm )');
    }
  }, [new Date().getHours()]);


  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Library Status:</h3>
        <p>{libraryStatus}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
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
  )
}

export default ImgSlide