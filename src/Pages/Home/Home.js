import React from 'react';
import './home.css';
import riad from '../../folder/images/riad.png'
import { Link } from 'react-router-dom';


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
                    <h4 className='text-2xl typing-text font-medium pr-1' >web Developer...</h4>
                    <button className='btn bg-zinc-700 hover:bg-primary' onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100007574531326')}>
                        Hire me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;