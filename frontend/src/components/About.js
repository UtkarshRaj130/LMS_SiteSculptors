import React from 'react';
import '../Styles/About.css';

function About() {
    return (
        <div className='about-box'>
            {/* <hr style={{color:'white',height:'2px'}}/> */}
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        <p>Welcome to our Library Managemnet System (LMS)!</p>
                        <p>Our LMS offers a range of features to make your library experience more convenient and enjoyable. With our system, you can : )</p>
                        <br/>
                        <ul>
                            <li>View your borrowed books and their due dates through the "My Books" option.</li>
                            <li>Search for books in our catalog using our adavanced search function.</li>
                            <li>Reserve books in advance to ensure availability.</li>
                            <li>By clicking on any Book in the Search Results, you can access that book's details.</li>
                            <li>Click on the IIT Dharwad icon to visit our official website and explore more resources.
                            </li>
                        </ul>
                        <p>Our Goal is to provide a user-friendly and efficient platform for all your library needs. We value your feedback and suggestions, so please don't hesitate to reach out to us for any improvements or ideas you may have.</p>
                        <p>Thankyou for being a part of the IIT Dharwad Library community!</p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;

{ }

// The IIT Dharwad Library collection consists of nearly 4750+ books in various disciplines. These are arranged subject-wise. It has also acquired a few ISO standards (International Standards Organization) in digital form. At present, the main motto is to build up the Library collection such that it has information resources up to Ph.D. level, including advanced texts and reference materials.
// <br />
// <br />
// IIT Dharwad is a Life Member of the prestigious “Current Science Association” of the “Indian Academy of Sciences”, and receiving the “Current Science” journal. It also receives some national newspapers and light reading magazines. Very soon, some popular S&T magazines will be at readers’ disposal, which will make young minds aware of recent happenings in the scientific world.
// <br />
// <br />
// Happy Learning!
// <br />
// <br />
// Your suggestions for improvement are always welcome!