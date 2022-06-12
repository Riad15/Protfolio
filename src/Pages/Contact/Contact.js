import React from 'react';
import { BeakerIcon, LocationMarkerIcon, MailIcon, PhoneIcon, UserAddIcon } from '@heroicons/react/solid'

const Contact = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left w-1/2 ml-6">
                    <h1 class="text-5xl font-bold">Get in Touch</h1>
                    <p class="py-6">If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
                    <div className='flex justify-start'>
                        <UserAddIcon className="h-10 w-10 text-blue-500"></UserAddIcon>
                        <div className='ml-6'>
                            <h5 className='text-lg font-bold'>Name :</h5>
                            <p className='text-lg'>Asif Riad</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <MailIcon className="h-10 w-10 text-blue-500"></MailIcon>
                        <div className='ml-6'>
                            <h5 className='text-lg font-bold'>Email :</h5>
                            <p className='text-lg'>asifriad15@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <PhoneIcon className="h-10 w-10 text-blue-500"></PhoneIcon>
                        <div className='ml-6'>
                            <h5 className='text-lg font-bold'>Call/What's APP :</h5>
                            <p className='text-lg'>+880 1629558872</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <LocationMarkerIcon className="h-10 w-10 text-blue-500"></LocationMarkerIcon>
                        <div className='ml-6'>
                            <h5 className='text-lg font-bold'>Address :</h5>
                            <p className='text-lg'>Uttor-Badd, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div class="card w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-5xl text-center font-medium mb-3'>Message Me</h1>
                        <div class="form-control">
                            <input type="text" placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="email" placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="Subject" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <textarea type="text" placeholder="Write A Massage" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;