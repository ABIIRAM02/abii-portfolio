import React, { memo } from 'react';
import { portfolio } from '@/util/constants';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';

const Hero = () => {
  const { hero } = portfolio;

  return (
    <div className="block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-20 px-0 md:px-2">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
          {hero.heading.split1}{' '}
          <span className="text-secondary-default">{hero.heading.split2}</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
          {hero.description1}
        </p>
        <p className="text-zinc-600 text-sm mt-2">{hero.quote}</p>
        <div className="mt-8 text-zcinc-400 text-sm md:text-base max-w-2xl leading-loose tracking-wide">
          {hero.description2}{' '}
        </div>
      </div>
      <div className="mt-4 lg:mt-0 p-3 lg:pl-5 space-y-2">
        <Image
          alt="hero-img"
          width="400"
          height="400"
          className="transition duration-500 blur-0 mx-auto scale-100 rounded-lg"
          src={hero.image}
        />
        <div className="text-myLightGray text-center flex gap-2 justify-center items-center">
          <IoLocationSharp />
          <h2>Bangalore, India</h2>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
