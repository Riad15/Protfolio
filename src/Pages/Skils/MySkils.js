import React from 'react';

const MySkils = () => {
    return (
        <div id='my-skills' class="hero min-h-screen bg-primary">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left w-1/2">
                    <h1 class="text-5xl font-bold">My Skills</h1>
                    <h1 class="text-2xl text-white font-bold">My creative skills & experiences.</h1>
                    <p class="py-6 text-lg">As a fullstack web developer, everyone needs to know about frontend and backend technology. Over 3.5 years I have been working hard on various frontend and backend technologies. I also created Website front-end design from PSD, xD, Figma with HTML5, CSS3, JavaScript, JQuery, Sass and Wordpress. I am also develop website backend with latest PHP, Laravel framework Technology. My recent achivement is convert any Website to WebView Android application by using Java. Below are links to some of the responsive sites I have created. You know...</p>
                </div>
                <div className='w-full flex flex-col'>
                    <div>
                        <p className='text-white text-xl font-medium'> Python || JavaScript || ES-6</p>
                        <progress class="progress progress-black w-5/6" value="85" max="100"></progress>
                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> React Js || Vue Js</p>
                        <progress class="progress progress-black w-5/6" value="90" max="100"></progress>

                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> Node Js || Express Js</p>
                        <progress class="progress progress-black w-5/6" value="75" max="100"></progress>
                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> Bootstrap || Tailwind Css</p>
                        <progress class="progress progress-black w-5/6" value="95" max="100"></progress>

                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> Firebase || Mongo DB</p>
                        <progress class="progress progress-black w-5/6" value="85" max="100"></progress>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MySkils;