import React from 'react';
import { Timeline } from './aceUI/timeline';
import { projectsInfo } from '@/util/constants';

const Projects = () => {
  return (
    <div className="flex flex-col gap-3 text-gray-400">
      <h2 className="font-bold text-2xl md:text-3xl text-white">
        Selected Projects
      </h2>
      <p>Projects based on different web technologies </p>
      <section>
        <Timeline data={projectsInfo} />
      </section>
    </div>
  );
};

export default Projects;
