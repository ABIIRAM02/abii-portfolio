'use client';
import React, { memo, useState } from 'react';
import { portfolio } from '@/util/constants';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa6';
import { FaQuoteRight } from 'react-icons/fa6';

const Hero = () => {
  const { hero } = portfolio;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      id="hero"
      className="block relative lg:flex justify-center items-center max-w-5xl mx-auto mt-5 md:mt-20 px-0 md:px-2"
    >
      <div className="font-bold text-3xl md:text-5xl text-zinc-5010ax-w-3xl">
        <section className="flex justify-center md:justify-start items-center ">
          <div>
            <h2 className="pb-2 text-xl md:text-3xl font-normal">
              Haaay! abii here👋{' '}
            </h2>
            <h1 className="">
              {hero.heading.split1}{' '}
              <span className="text-secondary-default">
                {hero.heading.split2}
              </span>
            </h1>
          </div>
          <Image
            alt="hero-img"
            width="100"
            height="100"
            className={`transition md:hidden duration-[500ms] ease-in-out mx-auto scale-110 rounded-full ${
              isLoaded ? 'blur-0' : 'blur-sm'
            }`}
            src={hero.image}
            onLoad={() => setIsLoaded(true)}
          />
        </section>
        <p className="text-zinc-400 font-normal text-sm md:text-base max-w-2xl mt-8 tracking-wide">
          {hero.description1}
        </p>
        <p className="text-zinc-600 text-sm mt-2 font-normal text-right md:text-left">
          {hero.quote}
        </p>
        <div className=" mt-8 text-sm font-normal md:text-base max-w-2xl tracking-wide text-center lg:w-5/6 space-x-2">
          <FaQuoteLeft className="inline text-myBlue" />
          <span>{hero.description2}</span>
          <FaQuoteRight className="inline text-myBlue" />
        </div>
      </div>
      <div className="mt-4 lg:mt-0 p-3 lg:pl-5 space-y-2">
        <Image
          alt="hero-img"
          width="400"
          height="400"
          className={`transition duration-[500ms] ease-in-out mx-auto scale-100 rounded-lg ${
            isLoaded ? 'blur-0' : 'blur-sm'
          }`}
          src={hero.image}
          onLoadingComplete={() => setIsLoaded(true)}
        />
        <div
          id="skills"
          className="text-myLightGray text-center flex gap-2 justify-center items-center"
        >
          <IoLocationSharp />
          <h2>{isLoaded ? 'Bangalore, India' : 'Loading...'}</h2>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
