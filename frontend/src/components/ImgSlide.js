// import React from 'react'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/ImgSlide.css'


function ImgSlide() {
  const [libraryStatus, setLibraryStatus] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/student-login');
  }
  useEffect(() => {
    const currentTime = new Date().getHours();
    // const isOpen = currentTime >= 9 && currentTime <= 18; // 9am to 6pm

    if (currentTime >= 9 && currentTime <= 18) {
      setLibraryStatus('Library is open');
    } else {
      setLibraryStatus('Library is closed');
    }
  }, [new Date().getHours()]);

  return (
    <div className="main">

<div className=' parallax'>

<img
src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D"

alt="Library-Status"
/>
<div className="library-status">
          <h3>LIBRARY STATUS:</h3>
        <marquee>  <p>{libraryStatus}</p></marquee>
        </div>
</div>
<div className='parallax'>
<img className='parallax'
src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2tzfGVufDB8fDB8fHww"
alt="the back of random person"
/>
</div>
<div className='parallax'>
<img 
src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
alt="an eagle"
/>
</div>

<div className='parallax '  onClick={handleLoginClick}>
{/* <h3>Student-login</h3> */}
  <div className='login-text'>
      <p>click here to Student-login</p>
  </div>
<img
src="https://images.unsplash.com/photo-1623461487986-9400110de28e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
alt="student-login"
// {/* /><div className='login'><h3>click to login</h3></div> */}
/>
</div>


<div className='parallax'>

 <img
src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHklMjBzdHVkZW50fGVufDB8fDB8fHww"
alt="a cup of something to drink, probably some tea"

/> 
</div>
 </div>         

  )
}

export default ImgSlide