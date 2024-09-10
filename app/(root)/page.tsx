import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main className="space-y-[8rem]">
      <Hero />
      <Work />
      <Projects />
    </main>
  );
}
