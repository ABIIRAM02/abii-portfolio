import { portfolio } from '@/util/constants';
import Image from 'next/image';
import React from 'react';
import { IoMenu } from 'react-icons/io5';

const Nav = () => {
  return (
    <header>
      <section className="hidden bg-myGray p-[8px] px-[18px] md:flex justify-between items-center rounded-[18px] text-[14px] w-2/6 hover:cursor-pointer border border-white/[0.1] mb-[7rem]">
        <div className="flex gap-3 items-center font-bold">
          <Image
            src="https://avatar.iran.liara.run/public/boy?username=abi"
            alt="profile"
            width={30}
            height={30}
          />
          <p>{portfolio.navbar.name}</p>
        </div>
        <p className="hover:bg-myLightGray p-2 rounded-xl transition duration-200">
          {portfolio.navbar.links.about}
        </p>
        <p className="hover:bg-myLightGray p-2 rounded-xl transition duration-200">
          {portfolio.navbar.links.contact}
        </p>
      </section>
      {/* mobile nav view */}
      <section className="md:hidden flex justify-between items-center">
        <div className=" flex gap-3 items-center font-bold">
          <Image
            src="https://avatar.iran.liara.run/public/boy?username=abi"
            alt="profile"
            width={30}
            height={30}
          />
          <p>{portfolio.navbar.name}</p>
        </div>
        <IoMenu />
      </section>
    </header>
  );
};

export default Nav;
