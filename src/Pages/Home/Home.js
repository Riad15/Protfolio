import React from 'react';
import './home.css';
import riad from '../../folder/images/riad.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import github from '../../folder/others/github-square-brands.svg'
import linkedIn from '../../folder/others/linkedin-brands.svg'
import Facebook from '../../folder/others/facebook-square-brands.svg'


const Home = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className='bg-primary flex justify-around flex-col-reverse lg:flex-row'>
            <div className='person-img '>
                <img className='w-96 mt-0 ' src={riad} alt="" />
            </div>
            <div className=' flex justify-center items-center '>
                <div>
                    <h4 className='text-3xl text-white font-medium'>Hi there, I'm</h4>
                    <h2 className='text-5xl font-bold'>Asif Riad</h2>
                    <h4 className='text-2xl typing-text font-medium pr-1' >Web Developer...</h4>


                    <div className='flex mt-3'>
                        <img onClick={() => openInNewTab("https://github.com/Riad15")} className='w-8 mr-3 mx-3 hover:scale-125' src={github} alt="" />
                        <img onClick={() => openInNewTab("https://www.facebook.com/profile.php?id=100007574531326")} className='w-8 mr-3 mx-3 hover:scale-125' src={linkedIn} alt="" />
                        <img onClick={() => openInNewTab("https://www.linkedin.com/in/riad-87335317a/")} className='w-8 mr-3 mx-3 hover:scale-125' src={Facebook} alt="" />
                    </div>

                    <button className='btn bg-zinc-700 hover:bg-primary mt-3' onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100007574531326')}>
                        Hire me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;