import React from 'react';

const MySkils = () => {
    return (
        <div class="hero min-h-screen bg-primary">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">My Skills</h1>
                    <h1 class="text-2xl font-bold">My creative skills & experiences.</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className='w-full flex flex-col'>
                    <div>
                        <p className='text-white text-xl font-medium'> Python || JavaScript || ES-6</p>
                        <progress class="progress progress-black w-5/6" value="100" max="100"></progress>
                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> React Js || Vue Js</p>
                        <progress class="progress progress-black w-5/6" value="85" max="100"></progress>

                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> Node Js || Express Js</p>
                        <progress class="progress progress-black w-5/6" value="82" max="100"></progress>
                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> Bootstrap || Tailwind Css</p>
                        <progress class="progress progress-black w-5/6" value="75" max="100"></progress>

                    </div>
                    <div>
                        <p className='text-white text-xl font-medium'> Firebase || Mongo DB</p>
                        <progress class="progress progress-black w-5/6" value="70" max="100"></progress>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MySkils;