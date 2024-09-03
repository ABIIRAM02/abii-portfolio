import { MdOutlineWorkOutline } from 'react-icons/md';
import { LuSchool } from 'react-icons/lu';
import { PiGraduationCapFill } from 'react-icons/pi';
import globelChat from '@/assets/globelChat.png'
import globelNews from '@/assets/globelNews.png'
import expence from '@/assets/expence-tracker.png'
import yt from '@/assets/ytClone.png'

export const portfolio = {
  navbar: {
    name: '_$Abiram',
    links: {
      about: 'about',
      contact: 'Contact',
    },
  },
  hero: {
    heading: {
      split1: "Trust me, I'm a ",
      split2: 'software engineer.',
    },
    description1:
      'Meet Piyush Garg, content creator, educator, and entrepreneur known for his expertise in the tech industry. He has successfully launched numerous technical courses on various platforms. Founder of Teachyst, white-labeled Learning Management System (LMS) to help educators monetize their content globally.',
    quote: '~ ChatGPT',
    description2: "Building Teachyst when I'm not working on my day job.",
    linkText: 'Teachyst',
    linkUrl: 'https://teachyst.com',
  },
  footer: {},
};

export const socialMediaLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/piyushgarg195/',
    icon: '/social-media-icons/linkedin-logo.svg',
  },
  {
    id: 2,
    name: 'GitHub',
    url: 'https://github.com/piyushgarg-dev',
    icon: '/social-media-icons/github-logo.svg',
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
        details: ['Final year project - Hostel Management'],
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

export interface Projects {
  name: string;
  repo: string;
  repoName: string;
  content: string;
  link: string;
  techs: string[];
  image: any;
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
