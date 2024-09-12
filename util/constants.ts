import { MdOutlineWorkOutline } from 'react-icons/md';
import { LuSchool } from 'react-icons/lu';
import { PiGraduationCapFill } from 'react-icons/pi';
import { GrInstagram } from "react-icons/gr"
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { LuContact } from "react-icons/lu";
import { HiHome } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";

import globelChat from '@/assets/globelChat.png'
import globelNews from '@/assets/globelNews.png'
import expence from '@/assets/expence-tracker.png'
import yt from '@/assets/ytClone.png'

import abiProfile from '@/assets/profile/abiProfile.jpg'

export const portfolio = {
  navbar: {
    name: 'Abiram',
    links: {
      skills:'Skills',
      work: 'Works',
      projects: 'Projects',
    },
    image:abiProfile
  },
  hero: {
    heading: {
      split1: "Trust me, I'm a ",
      split2: 'software engineer.',
    },
    description1:
      'Meet Piyush Garg, content creator, educator, and entrepreneur known for his expertise in the tech industry. He has successfully launched numerous technical courses on various platforms. Founder of Teachyst, white-labeled Learning Management System (LMS) to help educators monetize their content globally.',
    image:abiProfile,
    quote: '~ ChatGPT',
    description2: "Building Teachyst when I'm not working on my day job.",
    linkText: 'Teachyst',
    linkUrl: 'https://teachyst.com',
  },
  footer: {},
};

export const navDivisions = {
  home:{
    title:'Home',
    icon:HiHome,
    href:''
  },
  contact:{
    title:'Contact',
    icon:LuContact,
    href:''
  },
}

export const socialmediaLinks:socialmediaLinksProps[] = [
    {
      title:'LinkedIn',
      icon:IoLogoLinkedin,
      href:''
    },
    {
      title:'Twitter',
      icon:FaXTwitter,
      href:''
    },
    {
      title:'Instagram',
      icon:GrInstagram,
      href:''
    },
    {
      title:'Github',
      icon:SiGithub,
      href:''
    },
  ]

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
      {
        name: 'Zoho',
        role: 'Softwere Developer',
        date: 'May 2023 - Present',
        location: 'Bangalore (Remote)',
        details: [
          'Integrated APIs for dynamic data handling.',
          'Redux for state management.',
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
        details: ['Class people leader','Final year project - Hostel Management'],
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
        details: [
          'Last Bencher',
        ],
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
   href: string,
   label: string, 
   onClick?: () => void 
}

export interface TimelineEntry {
  title: string;
  projects: Projects[]
}

export const projectsInfo:TimelineEntry[] = [
  {
    title:'Next.Js',
    projects:[
      {
        name:'Chat-App',
        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dignissimos eaque ipsa vel labore odio id ipsam molestias officia aliquid!Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
        techs:['Next', 'Tailwind', 'MongoDb', 'Socket.io', 'Google-OAuth'],
        image:globelChat,
        repoName:'ABIIRAM02/chat-app-socketio',
        repo:'https://github.com/ABIIRAM02/chat-app-socketio',
        link:'https://cool-zabaione-f75566.netlify.app/'
      },
      {
        name:'Globel-News',
        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dignissimos eaque ipsa vel labore odio id ipsam molestias officia aliquid!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dignissimos eaque ipsa vel labore odio id ipsam molestias officia aliquid!Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
        techs:['Next', 'Tailwind', 'TypeScript', 'GraphQl', 'Rapid-API'],
        image:globelNews,
        repoName:'ABIIRAM02/the-globel-news',
        repo:'https://github.com/ABIIRAM02/the-globel-news',
        link:'https://main--the-globel-news-by-abiidev.netlify.app/'
      }
    ]
  },
  {
    title:'MERN stack',
    projects:[
      {
        name:'Expence-Tracker',
        content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dignissimos eaque ipsa vel labore odio id ipsam molestias officia aliquid!Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
        techs:['React', 'Tailwind', 'MongoDb', 'GraphQL', 'Docker'],
        image:expence,
        repoName:'ABIIRAM02/expence-tracker-mern-gql',
        repo:'https://github.com/ABIIRAM02/expence-tracker-mern-gql',
        link:'https://expence-tracker-mern-gql.onrender.com/login'
      },
    ]
  },
  {
    title:'React.Js',
    projects:[
      {
        name:'You-tube Clone',
        content:'Developed a YouTube clone using Rapid API, featuring a complete video listing, search filtering, and a user-friendly interface with video suggestions displayed on the left during browsing and on the right while viewing videos.',
        techs:['React', 'Material-UI', 'Rapid-API'],
        image:yt,
        repoName:'ABIIRAM02/YTclone',
        repo:'https://github.com/ABIIRAM02/YTclone',
        link:'https://splendid-frangollo-2768f8.netlify.app/'
      },
    ]
  },
];

export const Skills= [
  "React",
  "Next.js",
  "Typescript",
  "Node.js",
  "Python",
  "Go",
  "Postgres",
  "Docker",
  "Kubernetes",
  "Java",
  "C++",
]