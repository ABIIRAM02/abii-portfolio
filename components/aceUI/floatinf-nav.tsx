/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { navDivisions } from '@/util/constants';
import { cn } from '@/util/util';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const { home, contact } = navDivisions;
const isMobileDevice = () => window.innerWidth <= 500;

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
      onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
      className={cn(
        'mx-auto flex gap-1 shadow-lg shadow-black md:gap-4 items-end rounded-full bg-zinc-900 p-1 md:px-4 md:py-3 md:h-16',
        className
      )}
    >
      <IconContainer
        isMobile={isMobile}
        mouseX={mouseX}
        key={home.title}
        {...home}
      />
      <span className="border border-white/[0.2] h-full" />
      {items.map((item) => (
        <IconContainer
          isMobile={isMobile}
          mouseX={mouseX}
          key={item.title}
          {...item}
        />
      ))}
      <span className="border border-white/[0.2] h-full" />
      <IconContainer
        isMobile={isMobile}
        mouseX={mouseX}
        key={contact.title}
        {...contact}
      />
    </motion.div>
  );
};

function IconContainer(data: {
  mouseX: MotionValue;
  title: string;
  icon: any;
  href: string;
  isMobile: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(data.mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={data.href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="px-2 py-0.5 whitespace-pre rounded-md border bg-neutral-800 border-neutral-900 text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {data.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            width: data.isMobile ? 18 : widthIcon,
            height: data.isMobile ? 18 : heightIcon,
          }}
          className="flex items-center justify-center text-3xl"
        >
          {<data.icon />}
        </motion.div>
      </motion.div>
    </Link>
  );
}
