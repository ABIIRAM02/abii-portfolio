import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col mx-auto text-center md:w-2/3 gap-4 md:my-[15vh] mb-[4rem]"
    >
      <h2 className="font-bold text-4xl md:text-5xl">Get in Touch</h2>
      <p className="text-lg md:text-2xl text-myLightGray">
        Wanna chat? Just shoot me a dm{' '}
        <Link
          href="https://www.linkedin.com/in/abiiprofile/"
          className="text-primary-default"
        >
          with a direct question on LinkedIn
        </Link>{' '}
        and I&apos;ll respond whenever I can. I will ignore all soliciting.
      </p>
    </footer>
  );
};
export default Footer;
