'use client';
import { useState } from 'react';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { LuSchool } from 'react-icons/lu';
import { PiGraduationCapFill } from 'react-icons/pi';
import { FaHandPointRight } from 'react-icons/fa6';

const myInfo = [
  {
    sNo: 0,
    category: 'Work',
    name: 'Sharp Right',
    icons: MdOutlineWorkOutline,
    info: {
      role: 'FrontEnd Developer',
      date: 'May 2023 - Present',
      location: 'Bangalore (Remote)',
      details: [
        'Integrated APIs for dynamic data handling.',
        'Implemented Redux for state management.',
        'Developed secure authentication processes.',
      ],
    },
  },
  {
    sNo: 1,
    category: 'College',
    name: 'Krishna Adithya',
    icons: PiGraduationCapFill,
    info: {
      role: 'BCA',
      date: '2019 - 2022',
      location: 'Coimbatore,Tamilnadu',
      details: ['Final year project - Hostel Management'],
    },
  },
  {
    sNo: 2,
    category: 'School',
    name: 'Kanchi Sankara',
    icons: LuSchool,
    info: {
      role: 'SSLC',
      date: '2019',
      location: 'Tiruchendur,Tamilnadu',
      details: [
        'Worked on SMS Automations',
        'Worked on Hubspot and Mailchimp integrations',
      ],
    },
  },
];

const Work = () => {
  const [workExpValue, setWorkExpValue] = useState(myInfo[0]);

  const handleWorkExp = (index: any) => {
    setWorkExpValue(myInfo[index]);
  };

  return (
    <div className=" mt-[6rem] md:mt-[10rem] flex flex-col gap-3 text-gray-400">
      <h2 className="font-bold text-2xl md:text-3xl text-white">
        Work and Education
      </h2>
      <p className="">
        Summary of professional experience and academic background.
      </p>

      <section className="md:pl-[4rem] lg:pl-[6rem] pt-[4rem] flex flex-col md:flex-row gap-10">
        <div className="flex md:flex-col md:border-l md:pl-[2rem] gap-3 md:p-3 border-myBlue/[0.2] ">
          {myInfo.map((data, index) => (
            <div
              key={index}
              onClick={() => {
                handleWorkExp(index);
              }}
              className={`${
                workExpValue.sNo === index ? 'bg-myGray' : 'bg-transparent'
              } p-2 px-3 md:px-5 cursor-pointer rounded-md flex gap-2 items-center hover:bg-myGray transition duration-300`}
            >
              <data.icons />
              <p>{data.category}</p>
            </div>
          ))}
        </div>
        <div
          className="flex flex-col gap-2 font-light text-sm "
          data-aos="fade-in"
        >
          <h2
            className="font-semibold md:font-bold text-2xl text-white"
            data-aos="fade-in"
          >
            {workExpValue.info.role}
            <span className="text-myBlue"> @{workExpValue.name}</span>
          </h2>
          <p>{workExpValue.info.date}</p>
          <p>{workExpValue.info.location}</p>
          <div className="space-y-1">
            {workExpValue.info.details.map((record: any, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <FaHandPointRight color="#06B6D4" /> <p>{record}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
