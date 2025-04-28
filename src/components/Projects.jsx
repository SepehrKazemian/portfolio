import React from 'react';
import projectsData from '../projectsData.json'; // Import the generated JSON data
import ProjectItem from './ProjectItem'; // Import the new item component

const Projects = () => {
  return (
    // Main container for the projects section
    <div className="w-full max-w-none px-4">
      {/* PROJECTS Title */}
      <h2 className="text-5xl font-bold text-center text-gray-200 mb-12">
        PROJECTS
      </h2>
      {/* Container for project items */}
      <div className="space-y-10">
        {projectsData.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
