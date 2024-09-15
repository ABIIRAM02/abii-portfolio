'use client';
import { FloatingDock } from './aceUI/floatinf-nav';
import { socialmediaLinks } from '@/util/constants';

const Nav = () => {
  return (
    <header className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-gradient-to-b from-transparent to-black pb-4 md:py-6 flex justify-center z-50">
      <FloatingDock items={socialmediaLinks} />
    </header>
  );
};

export default Nav;
