'use client';
import { useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa6';
import { workAndEducation } from '@/util/constants';

const Work = () => {
  const [workExpValue, setWorkExpValue] = useState(workAndEducation[0]);

  const handleWorkExp = (index: any) => {
    setWorkExpValue(workAndEducation[index]);
  };

  return (
    <div className="flex flex-col gap-3 text-gray-400" id="work">
      <h2 className="font-bold text-2xl md:text-3xl text-white">
        Work and Education
      </h2>
      <p className="">
        Summary of professional experience and academic background.
      </p>

      <section className="md:pl-[4rem] lg:pl-[6rem] pt-[2rem] md:pt-[4rem] flex flex-col md:flex-row gap-10">
        <div className="flex justify-center md:justify-start md:flex-col md:border-l md:pl-[2rem] gap-3 md:p-3">
          {workAndEducation.map((data, index) => (
            <div
              key={index}
              onClick={() => {
                handleWorkExp(index);
              }}
              className={`${
                workExpValue.sNo === index ? 'bg-myGray' : 'bg-transparent'
              } p-2 px-3 md:px-5 cursor-pointer rounded-md flex gap-2 items-center hover:bg-myGray transition duration-300`}
            >
              <data.icons
                className={`${workExpValue.sNo === index ? 'text-white' : ''}`}
              />
              <p>{data.category}</p>
            </div>
          ))}
        </div>

        <section className="flex flex-col gap-5 ">
          {workExpValue.info.map((company) => (
            <div
              key={company.name}
              className="flex flex-col gap-2 font-light text-sm "
            >
              <h2 className="font-semibold md:font-bold text-2xl text-white">
                {company.role}
                <span className="text-myBlue"> @{company.name}</span>
              </h2>
              <p>{company.date}</p>
              <p>{company.location}</p>
              <div className="space-y-1">
                {company.details.map((data, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaHandPointRight color="#06B6D4" /> <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Work;
