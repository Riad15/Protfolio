import React from 'react';
import aboutImg from '../../folder/images/images.png'

const About = () => {
    return (
        <div className='bg-white'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className="" src={aboutImg} alt='' />
                    <div className='w-1/2'>
                        <h1 class="text-5xl font-bold">About Me!</h1>
                        <p class="py-6">Hello, this is Asif Riad and I have been working in web design and web development for 1.5 years and I have accumulated all the great experiences while working in this sector. I am now a private company located in Dhaka, Bangladesh and 10 years old. I am currently learning more new programming technology and I have fallen in love with programming technology. I have been working for a long time on how to manage projects with client, leadership skills, communication skills and many other skills. As the days go by, new technologies are being discovered and their demand and popularity is increasing, I actually like to work with those new technologies, but the web development profession is above my choice.</p>
                        <button class="btn btn-primary">Resume Download</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;