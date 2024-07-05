import React from 'react'
import ImgSlide from './ImgSlide';
import Header from './Header';
import About from './About';

function Home() {
  return (
    <div>
    <Header/>
    <ImgSlide/>
    <hr className="divider" />
    <About/>

    </div>
  )
}

export default Home