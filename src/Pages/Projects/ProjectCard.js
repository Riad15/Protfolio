import React from 'react';

const ProjectCard = (props) => {
    const { live, name, picture, technology, description
    } = props.project;
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div class="card w-5/6 bg-base-100 shadow-xl my-6 mx-auto hover:bg-indigo-300">
            <figure><img className='p-4' src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='text-center text-lg text-primary font-bold'>Technology</p>
                <p>{technology}</p>
                <p className='text-center text-lg font-bold text-primary'> description</p>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <div onClick={() => openInNewTab(`${live}`)} class=" btn bg-primary hover:text-white badge badge-outline">Project Link</div>

                </div>
            </div>
        </div >
    );
};

export default ProjectCard;