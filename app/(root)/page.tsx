import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skill from '@/components/Skills';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main className="space-y-[3rem] md:space-y-[6rem]">
      <Hero />
      <Skill />
      <Work />
      <Projects />
    </main>
  );
}
