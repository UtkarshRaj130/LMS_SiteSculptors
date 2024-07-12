import React from 'react'
import '../Styles/About.css'


function About() {
  return (

    
         <div className='about-box'>
            {/* <hr  style={{color:'white',height:'2px'}}/> */}
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Welcome to our Library Management System (LMS)!. Whether you’re a librarian, a book lover, or a curious learner, our LMS aims to enhance your experience by organizing and providing seamless access to our extensive collection of books, journals, and media.<br/>
                        <br/>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                        Latin words, consectetur, from a Lorem Ipsum passage.<br/>
                        <br/>
                        Have a great experience in our LMS where you can search for books, borrow and return .
                        <br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>




    
  )
}

export default About