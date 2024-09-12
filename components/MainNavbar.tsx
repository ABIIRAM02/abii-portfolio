'use client';
import { NavLinkProps, portfolio } from '@/util/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useMemo, useCallback } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="hover:bg-myLightGray p-2 rounded-xl transition duration-200"
  >
    {label}
  </Link>
);

const MainNavbar = () => {
  const { navbar } = portfolio;
  const navBarLinks = useMemo(
    () => Object.entries(navbar.links),
    [navbar.links]
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const renderNavLinks = (needMenu: boolean) =>
    navBarLinks.map(([key, value]: [string, string], index: number) => (
      <NavLink
        key={index}
        href={`#${key}`}
        label={value}
        onClick={needMenu ? closeMenu : undefined}
      />
    ));

  return (
    <header>
      <section className="hidden bg-myGray p-[8px] px-[18px] md:flex justify-between items-center rounded-[18px] text-[14px] w-[fit-content] gap-4 hover:cursor-pointer mb-[2rem] border-secondary-default border">
        <Link href="#Hero" className="flex gap-3 items-center font-bold">
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
        {renderNavLinks(false)}
      </section>

      <section className="md:hidden flex justify-between items-center">
        <div className="flex gap-3 items-center font-bold">
          <Image
            src={navbar.image}
            alt="profile"
            width={30}
            height={30}
            className={`transition duration-[500ms] ease-in-out mx-auto rounded-full ${
              isLoaded ? 'blur-0' : 'blur-[2px]'
            }`}
            onLoadingComplete={() => setIsLoaded(true)}
          />
          <p>{navbar.name}</p>
        </div>
        {isMenuOpen ? (
          <RiCloseFill
            onClick={toggleMenu}
            className="text-xl cursor-pointer hover:text-secondary-default"
          />
        ) : (
          <RiMenu3Fill
            onClick={toggleMenu}
            className="text-xl cursor-pointer hover:text-secondary-default"
          />
        )}
      </section>
      {isMenuOpen && (
        <section className="md:hidden mt-4 bg-myGray rounded-sm p-3 flex flex-col justify-between text-[14px] w-full gap-2 hover:cursor-pointer mb-[0rem]">
          {renderNavLinks(true)}
        </section>
      )}
    </header>
  );
};

export default MainNavbar;
