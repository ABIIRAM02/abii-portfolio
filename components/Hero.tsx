import React, { memo } from 'react';
import styles from '@/styles';
import { portfolio, socialMediaLinks } from '@/util/constants';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="mt-4 lg:mt-0 p-3 lg:pl-5">
        <Image
          alt="hero-img"
          width="400"
          height="400"
          className="transition duration-500 blur-0 mx-auto scale-100 rounded-lg"
          src={hero.image}
        />
        <div className={`${styles.flexCenter} space-x-2 mt-2`}>
          {socialMediaLinks.map((data) => (
            <Link
              href={data.url}
              key={data.id}
              className="text-zinc-500 text-sm relative hover:text-secondary-default"
            >
              <span id='Work' className="relative z-10 px-2 py-2 inline-block  text-white bg-transparent">
                <data.icon className='text-xl text-myLightGray hover:text-myBlue transition duration-200' />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
