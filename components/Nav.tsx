import { portfolio } from '@/util/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMenu } from 'react-icons/io5';

const Nav = () => {
  const { navbar } = portfolio;

  return (
    <header>
      <section className="hidden bg-myGray p-[8px] px-[18px] md:flex justify-between items-center rounded-[18px] text-[14px] w-2/6 hover:cursor-pointer border border-white/[0.1] mb-[7rem]">
        <Link href="#Hero" className="flex gap-3 items-center font-bold">
          <Image
            alt="hero-img"
            width="40"
            height="40"
            className="rounded-full"
            src={navbar.image}
          />
          <p>{navbar.name}</p>
        </Link>
        <Link
          href="#Work"
          className="hover:bg-myLightGray p-2 rounded-xl transition duration-200"
        >
          {navbar.links.work}
        </Link>
        <Link
          href="#Projects"
          className="hover:bg-myLightGray p-2 rounded-xl transition duration-200"
        >
          {navbar.links.projects}
        </Link>
      </section>
      {/* mobile nav view */}
      <section className="md:hidden flex justify-between items-center">
        <div className="flex gap-3 items-center font-bold">
          <Image
            src={navbar.image}
            alt="profile"
            width={30}
            height={30}
            className="scale-110 rounded-full"
          />
          <p>{navbar.name}</p>
        </div>
        <IoMenu />
      </section>
    </header>
  );
};

export default Nav;
