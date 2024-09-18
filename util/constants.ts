import { MdOutlineWorkOutline } from 'react-icons/md';
import { LuSchool } from 'react-icons/lu';
import { PiGraduationCapFill } from 'react-icons/pi';
import { GrInstagram } from 'react-icons/gr';
import { IoLogoLinkedin } from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';
import { LuContact } from 'react-icons/lu';
import { HiHome } from 'react-icons/hi2';
import { FaXTwitter } from 'react-icons/fa6';

import globelChat from '@/assets/globelChat.png';
import globelNews from '@/assets/globelNews.png';
import expence from '@/assets/expence-tracker.png';
import yt from '@/assets/ytClone.png';

import abiProfile from '@/assets/profile/abiProfile.jpg';

export const portfolio = {
  navbar: {
    name: 'Abiram',
    links: {
      skills: 'Skills',
      work: 'Works',
      projects: 'Projects',
    },
    image: abiProfile,
  },
  hero: {
    heading: {
      split1: "Trust me, I'm a ",
      split2: 'software engineer.',
    },
    description1:
      'Meet Abiram, a web developer specializing in React.js and Next.js with a strong foundation in the MERN stack. An avid outdoor enthusiast, enjoy hiking and hitting Gym. Always eager to work on new challenges and projects that push his technical boundaries while keeping things light-hearted and fun.',
    image: abiProfile,
    quote: '~ ChatGPT',
    description2:
      "You'll find me working on freelance gigs or exploring personal projects that fuel my creativity, When I'm not immersed in my day job.",
    linkText: 'Teachyst',
    linkUrl: 'https://teachyst.com',
  },
  footer: {},
};

export const navDivisions = {
  home: {
    title: 'Home',
    icon: HiHome,
    href: '#home',
  },
  contact: {
    title: 'Contact',
    icon: LuContact,
    href: '#contact',
  },
};

export const socialmediaLinks: socialmediaLinksProps[] = [
  {
    title: 'LinkedIn',
    icon: IoLogoLinkedin,
    href: 'https://www.linkedin.com/in/abiiprofile/',
  },
  {
    title: 'Twitter',
    icon: FaXTwitter,
    href: '',
  },
  {
    title: 'Instagram',
    icon: GrInstagram,
    href: 'https://www.instagram.com/abii_ram_02/',
  },
  {
    title: 'Github',
    icon: SiGithub,
    href: 'https://github.com/ABIIRAM02?tab=repositories',
  },
];

export const workAndEducation = [
  {
    sNo: 0,
    category: 'Work',
    icons: MdOutlineWorkOutline,
    info: [
      {
        name: 'Sharp Right',
        role: 'FrontEnd Developer',
        date: 'May 2023 - Present',
        location: 'Bangalore (Remote)',
        details: [
          'Integrated API',
          'Redux for state management.',
          'Developed secure authentication processes.',
        ],
      },
    ],
  },
  {
    sNo: 1,
    category: 'College',
    icons: PiGraduationCapFill,
    info: [
      {
        name: 'Krishna Adithya',
        role: 'BCA',
        date: '2019 - 2022',
        location: 'Coimbatore,Tamilnadu',
        details: [
          'Class people leader',
          'Final year project - Hostel Management',
        ],
      },
    ],
  },
  {
    sNo: 2,
    category: 'School',
    icons: LuSchool,
    info: [
      {
        name: 'Kanchi Sankara',
        role: 'SSLC',
        date: '2019',
        location: 'Tiruchendur,Tamilnadu',
        details: ['Last Bencher'],
      },
    ],
  },
];

interface socialmediaLinksProps {
  title: string;
  icon: any;
  href: string;
}

export interface Projects {
  name: string;
  repo: string;
  repoName: string;
  content: string;
  link: string;
  techs: string[];
  image: any;
}

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export interface TimelineEntry {
  title: string;
  projects: Projects[];
}

export const projectsInfo: TimelineEntry[] = [
  {
    title: 'Next.Js',
    projects: [
      {
        name: 'Chat-App',
        content:
          'Developed a Next.js application featuring real-time chat functionality, integrated with Socket.IO for seamless, real-time message handling on the server side. The application uses Google OAuth for secure authentication, allowing users to log in via their Gmail accounts. Chat messages are stored in MongoDB for persistent data storage, ensuring that conversations are displayed upon the initial render. This combination of technologies ensures a responsive and secure user experience.',
        techs: ['Next', 'Tailwind', 'MongoDb', 'Socket.io', 'Google-OAuth'],
        image: globelChat,
        repoName: 'ABIIRAM02/chat-app-socketio',
        repo: 'https://github.com/ABIIRAM02/chat-app-socketio',
        link: 'https://cool-zabaione-f75566.netlify.app/',
      },
      {
        name: 'Globel-News',
        content:
          'This project showcases a dynamic news website built using Next.js 13 and Tailwind CSS, featuring full responsiveness and dark mode. It efficiently handles static and dynamic data with Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) alternatives. The app utilizes the News API with search capabilities by keywords and categories, integrating Stepzen for a GraphQL interface. TypeScript ensures minimal bugs, and the website is deployed on Vercel for optimized performance.',
        techs: ['Next', 'Tailwind', 'TypeScript', 'GraphQl', 'Rapid-API'],
        image: globelNews,
        repoName: 'ABIIRAM02/the-globel-news',
        repo: 'https://github.com/ABIIRAM02/the-globel-news',
        link: 'https://main--the-globel-news-by-abiidev.netlify.app/',
      },
    ],
  },
  {
    title: 'MERN stack',
    projects: [
      {
        name: 'Expence-Tracker',
        content:
          'Built an Expense Tracker application using the MERN stack and GraphQL, providing users with an intuitive interface to manage and track their financial activities. The app features secure user authentication for login and management, along with functionality to easily add, edit, and delete expenses. Leveraging GraphQL enables efficient real-time updates, while the responsive design ensures smooth usability across both desktop and mobile devices. To deploy, you can use the Docker pull command: docker pull abii02/expence-tracker.',
        techs: ['React', 'Tailwind', 'MongoDb', 'Express', 'GraphQL', 'Docker'],
        image: expence,
        repoName: 'ABIIRAM02/expence-tracker-mern-gql',
        repo: 'https://github.com/ABIIRAM02/expence-tracker-mern-gql',
        link: 'https://expence-tracker-mern-gql.onrender.com/login',
      },
    ],
  },
  {
    title: 'React.Js',
    projects: [
      {
        name: 'You-tube Clone',
        content:
          'Developed a simple YouTube clone using Rapid API, featuring a complete video listing, search filtering, and a user-friendly interface with video suggestions displayed on the left during browsing and on the right while viewing videos.',
        techs: ['React', 'Material-UI', 'Rapid-API'],
        image: yt,
        repoName: 'ABIIRAM02/YTclone',
        repo: 'https://github.com/ABIIRAM02/YTclone',
        link: 'https://splendid-frangollo-2768f8.netlify.app/',
      },
    ],
  },
];

export const Skills = [
  'React',
  'Next.js',
  'JavaScript',
  'Typescript',
  'Node.js',
  'Express.js',
  'React-Shopify',
  'MongoDB',
  'HTML',
  'CSS',
  'TailwindCss',
  'MUI',
  'GraphQL',
  'AWS',
];
