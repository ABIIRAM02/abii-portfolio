import React from 'react';
import { Skills } from '@/util/constants';

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="font-bold text-2xl md:text-3xl text-white">Skills</h2>
        <div className="flex flex-wrap gap-4 mt-3">
          {Skills.map((skill: any, id: number) => (
            <div
              key={id}
              className="text-[14px] inline-flex items-center rounded-md px-2.5 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-white shadow bg-black border border-secondary-default hover:border-white hover:text-black text-white cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
