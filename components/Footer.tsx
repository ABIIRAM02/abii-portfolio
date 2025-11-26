import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col mx-auto text-center md:w-2/3 gap-4 md:my-[15vh] mb-[4rem]"
    >
      <h2 className="font-bold text-4xl md:text-5xl">Get in Touch</h2>
      <p className="text-lg md:text-2xl text-myLightGray">
        Wanna chat? Just shoot me a{' '}
        <span className="text-primary-default">DM</span>{' '}
        <Link href="https://www.linkedin.com/in/abiiprofile/">
          with a straight question on{' '}
          <span className="text-primary-default">LinkedIn</span>
        </Link>{' '}
        and I&apos;ll respond whenever I can.
      </p>
    </footer>
  );
};
export default Footer;
