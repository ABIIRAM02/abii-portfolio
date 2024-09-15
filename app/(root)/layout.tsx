import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import React, { ReactNode } from 'react';

function Homelayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-black min-h-screen w-full text-white flex justify-center">
        <div className="h-full w-full xl:w-4/6 min-h-screen p-[2rem]" id="Hero">
          <MainNavbar />
          <Nav />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homelayout;
