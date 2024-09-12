import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col mx-auto text-center md:w-2/3 gap-4 md:my-[15vh]">
      <h2 className="font-bold text-4xl md:text-5xl">Get in Touch</h2>
      <p className="text-lg md:text-2xl text-myLightGray">
        Wanna chat? Just shoot me a dm{' '}
        <Link href="#" className="text-primary-default">
          with a direct question on twitter
        </Link>{' '}
        and I&apos;ll respond whenever I can. I will ignore all soliciting.
      </p>
    </footer>
  );
};
export default Footer;
