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
                        The IIT Dharwad Library collection consists of nearly 4750+ books in various disciplines. These are arranged subject-wise. It has also acquired a few ISO standards (International Standards Organization) in digital form. At present, the main motto is to build up the Library collection such that it has information resources up to Ph.D. level, including advanced texts and reference materials.
                        <br />
                        <br />
                        IIT Dharwad is a Life Member of the prestigious “Current Science Association” of the “Indian Academy of Sciences”, and receiving the “Current Science” journal. It also receives some national newspapers and light reading magazines. Very soon, some popular S&T magazines will be at readers’ disposal, which will make young minds aware of recent happenings in the scientific world.
                        <br />
                        <br />
                        Happy Learning!
                        <br />
                        <br />
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
