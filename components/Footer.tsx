import styles from '@/styles';
import { portfolio, socialMediaLinks } from '@/util/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    const { navbar } = portfolio

    return (
        <section className="my-[3rem] flex flex-col gap-5 items-center justify-center text-2xl">
            <div>
                <Link href="#Hero" className="flex gap-3 items-center font-bold">
                    <Image
                        src={navbar.image}
                        alt="profile"
                        width={35}
                        height={35}
                        className='rounded-full'
                    />
                    <h2>{navbar.name}</h2>
                </Link>
            </div>

            <div className='text-base font-thin flex gap-4' >
                <Link href="#Work" >
                    {navbar.links.work}
                </Link>
                <Link href="#Projects" >
                    {navbar.links.projects}
                </Link>
            </div>

            <div className={`${styles.flexCenter} space-x-2`} >
                {socialMediaLinks.map((data) => (
                    <Link
                        target='_blank'
                        href={data.url}
                        key={data.id}
                        className="text-zinc-500 text-sm relative"
                    >
                        <span className="relative z-10 px-2 py-2 inline-block text-zinc-700 bg-transparent ">
                            <data.icon id='Work' className='text-xl text-myLightGray hover:text-myBlue transition duration-200' />
                        </span>
                    </Link>
                ))}
            </div>

        </section>
    );
};
export default Footer;
