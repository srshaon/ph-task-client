import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='my-5' style={{ height: '50vh' }}>
            <button className='w-25 p-3' style={{ borderRadius: '5px' }}>Edit</button>
            <h3 className='mt-4'><u>About Myself</u></h3>
            <div className='about-sec mt-5'>
                <h3>Shohanur Rahman Shaon</h3>
                <p><b>Email:</b> weuhube@gmail.com</p>
                <p><b>University: </b> National University</p>
                <p><b>Address:</b> Mirpur, Dhaka</p>
            </div>
        </div>
    );
};

export default About;