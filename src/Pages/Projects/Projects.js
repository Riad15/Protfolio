import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('project_info.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects'>
            <h1 className='text-5xl font-bold text-center'>My Latest Projects </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 align-middle'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>

        </div>
    );
};

export default Projects;