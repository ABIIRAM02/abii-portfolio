'use client';
import { portfolio } from '@/util/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';

const MainNavbar = () => {
  const { navbar } = portfolio;
  const navBarLinks = useMemo(
    () => Object.entries(navbar.links),
    [navbar.links]
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const renderNavLinks = () =>
    navBarLinks.map(([key, value]: [string, string], index: number) => (
      <Link
        key={index}
        href={`#${key}`}
        className="hover:bg-myLightGray p-2 rounded-xl transition duration-200"
      >
        {value}
      </Link>
    ));

  return (
    <section className="hidden bg-myGray p-[8px] px-[18px] md:flex justify-between items-center rounded-[18px] text-[14px] w-[fit-content] gap-4 hover:cursor-pointer mb-[2rem] border-secondary-default border">
      <Link href="#hero" className="flex gap-3 items-center font-bold">
        <Image
          src={navbar.image}
          alt="hero-img"
          width="40"
          height="40"
          className={`transition duration-[500ms] ease-in-out mx-auto rounded-full ${
            isLoaded ? 'blur-0' : 'blur-[2px]'
          }`}
          onLoadingComplete={() => setIsLoaded(true)}
        />
        <p>{navbar.name}</p>
      </Link>
      {renderNavLinks()}
    </section>
  );
};

export default MainNavbar;
