import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa'
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'

import Pixora from './assets/pixora.webp'
import CaseReady from './assets/caseready.webp'
import Loadout from './assets/loadout.webp'
import DealLink from './assets/deallink.webp'
import Work1 from './assets/movix.webp'
import Work2 from './assets/yt-clone.webp'
import Work3 from './assets/home-portfolio.webp'
import Work4 from './assets/construction.webp'

import Theme1 from './assets/purple.png'
import Theme2 from './assets/red.png'
import Theme3 from './assets/blueviolet.png'
import Theme4 from './assets/blue.png'
import Theme5 from './assets/goldenrod.png'
import Theme6 from './assets/magenta.png'
import Theme7 from './assets/yellowgreen.png'
import Theme8 from './assets/orange.png'
import Theme9 from './assets/green.png'
import Theme10 from './assets/yellow.png'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },
  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },
  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
]

export const personalInfo = [
  {
    id: 1,
    title: 'Full Name',
    description: 'Naveed Ilyas',
  },
  {
    id: 2,
    title: 'Experience',
    description: '3+ Years',
  },
  {
    id: 3,
    title: 'Address',
    description: 'Lahore, Pakistan',
  },
  {
    id: 4,
    title: 'Phone',
    description: '+92 303 4793698',
    href: 'tel:+923034793698',
  },
  {
    id: 5,
    title: 'Email',
    description: 'naveedilyas115@gmail.com',
    href: 'mailto:naveedilyas115@gmail.com',
  },
]

export const skillGroups = [
  {
    id: 1,
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    id: 2,
    title: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'Zustand',
      'TanStack Query',
      'Tailwind CSS',
      'Shadcn UI',
      'Material UI',
      'Framer Motion',
    ],
  },
  {
    id: 3,
    title: 'Data & APIs',
    items: ['REST APIs', 'Axios', 'Socket.IO', 'WebSockets'],
  },
  {
    id: 4,
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Prisma'],
  },
  {
    id: 5,
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Vercel'],
  },
  {
    id: 6,
    title: 'Other',
    items: [
      'i18next (i18n / RTL)',
      'Responsive Design',
      'RBAC & Protected Routes',
      'Performance Optimization',
      'Code Splitting',
      'Lazy Loading',
    ],
  },
]

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jun 2025 – Present',
    title: 'Frontend Engineer <span> Tekxai </span>',
    desc: 'Owning frontend delivery for production React and Next.js products used by multi-role teams.',
    points: [
      'Ship feature work from UI implementation through API integration and release-ready polish.',
      'Partner with design and backend on auth-aware routing, RBAC, and reliable client-side state.',
      'Build reusable TypeScript components and consistent data-fetching with TanStack Query and Zustand.',
      'Strengthen UX with responsive layouts, loading/error states, and performance-minded rendering.',
    ],
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jan 2023 – Jun 2025',
    title: 'Frontend Developer <span> BuildAi360 </span>',
    desc: 'Built and iterated on React applications for operational dashboards and business workflows.',
    points: [
      'Translated product requirements into reusable components with Redux Toolkit.',
      'Integrated internal and third-party APIs, including Socket.IO for live updates.',
      'Improved performance by reducing unnecessary re-renders on data-heavy views.',
    ],
  },
  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'Feb 2018 – Feb 2022',
    title: 'BS Computer Science <span> COMSATS University </span>',
    desc: 'Bachelor of Science in Computer Science from COMSATS University Islamabad, Vehari Campus. CGPA 3.24.',
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Intermediate <span> Superior College </span>',
    desc: 'Completed Intermediate from Superior College, Vehari, Punjab, Pakistan. Grade: A.',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Matriculation <span> Model High School Vehari </span>',
    desc: 'Completed Matriculation from Model High School, Vehari, Punjab, Pakistan. Grade: A+.',
  },
]

const detail = (icon, title, desc) => ({ icon, title, desc })

export const portfolio = [
  {
    id: 1,
    featured: true,
    img: Pixora,
    company: 'Tekxai',
    title: 'Pixora AI Photo Editor',
    short:
      'AI photo editor with Google OAuth, usage tracking, ImageKit transforms, and Stripe billing.',
    deploylink: 'https://pixora-ai-photo-editor.vercel.app/',
    comingSoon: false,
    stack: ['Next.js', 'TypeScript', 'Prisma', 'MongoDB', 'Stripe', 'ImageKit', 'NextAuth'],
    bullets: [
      'Built an AI photo editor with Next.js, Google OAuth, and Prisma/MongoDB usage tracking.',
      'Integrated ImageKit for signed uploads and AI transforms with free-plan usage limits.',
      'Added Stripe Checkout and webhooks for Free/Pro plans and quota enforcement.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'Pixora AI Photo Editor'),
      detail(<FiUser />, 'Company : ', 'Tekxai'),
      detail(<FaCode />, 'Stack : ', 'Next.js, TypeScript, Prisma, Stripe'),
      detail(<FiExternalLink />, 'Preview : ', 'https://pixora-ai-photo-editor.vercel.app/'),
    ],
  },
  {
    id: 2,
    featured: true,
    img: CaseReady,
    company: 'Tekxai · ForthRight AI',
    title: 'ForthRight AI CaseReady',
    short:
      'Multi-role Texas SpEd platform for IEP scoring, Needs Review, and PEIMS-ready export.',
    deploylink: 'https://app.spedinsight.com/',
    comingSoon: false,
    stack: ['Next.js', 'TypeScript', 'TanStack Query', 'Zustand', 'WebSockets', 'Tailwind'],
    bullets: [
      'Owned frontend delivery for a multi-role Texas SpEd platform with RBAC and protected routing.',
      'Built IEP workflows including upload, AI extraction review, HB 2 intensity scoring, and TWEDS export gates.',
      'Designed data flows with TanStack Query and WebSockets so extract/score pipelines stay in sync.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'SpEd Insight / CaseReady'),
      detail(<FiUser />, 'Company : ', 'Tekxai · ForthRight AI'),
      detail(<FaCode />, 'Stack : ', 'Next.js, TanStack Query, Zustand'),
      detail(<FiExternalLink />, 'Preview : ', 'https://app.spedinsight.com/'),
    ],
  },
  {
    id: 3,
    featured: true,
    img: Loadout,
    company: 'Tekxai',
    title: 'Loadout Marketplace',
    short:
      'Peer-to-peer marketplace with role-based access, listings, chat, and live notifications.',
    deploylink: 'https://loadoutp2p.com/',
    comingSoon: false,
    stack: ['React.js', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Socket.IO'],
    bullets: [
      'Delivered a multi-role marketplace with separate user and admin experiences and protected routes.',
      'Implemented listing creation, category browsing, saved products, seller profiles, and ratings.',
      'Integrated REST APIs with Socket.IO chat and notifications across sessions.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'Loadout P2P Marketplace'),
      detail(<FiUser />, 'Company : ', 'Tekxai'),
      detail(<FaCode />, 'Stack : ', 'React, TypeScript, Socket.IO'),
      detail(<FiExternalLink />, 'Preview : ', 'https://loadoutp2p.com/'),
    ],
  },
  {
    id: 4,
    featured: true,
    img: DealLink,
    company: 'Tekxai',
    title: 'DealLink Bilingual App',
    short:
      'English/Arabic portal with full RTL support and shared UI patterns across locales.',
    deploylink: 'https://deallinkapp.com/',
    comingSoon: false,
    stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'i18next'],
    bullets: [
      'Built a bilingual English/Arabic portal with full RTL support across screen sizes.',
      'Structured reusable UI and state patterns so language switching never broke layout or forms.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'DealLink Bilingual Portal'),
      detail(<FiUser />, 'Company : ', 'Tekxai'),
      detail(<FaCode />, 'Stack : ', 'React, Redux Toolkit, i18next'),
      detail(<FiExternalLink />, 'Preview : ', 'https://deallinkapp.com/'),
    ],
  },
  {
    id: 5,
    featured: false,
    img: Work1,
    company: 'Personal',
    title: 'Movix Streaming Web App',
    short:
      'Movie discovery app powered by TMDB, with search, details, and Redux Toolkit state.',
    deploylink:
      'https://movies-visiting-videos-project-gx9atu8e0-naveedilyas786.vercel.app/',
    comingSoon: false,
    stack: ['React.js', 'Redux Toolkit', 'SCSS'],
    bullets: [
      'Built a movie browsing experience with TMDB search, details, and category views.',
      'Managed client state with Redux Toolkit and styled the UI with SCSS/SASS.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'Movix Streaming Web App'),
      detail(<FiUser />, 'API : ', 'TMDB'),
      detail(<FaCode />, 'Stack : ', 'React JS, Redux Toolkit, SCSS'),
      detail(
        <FiExternalLink />,
        'Preview : ',
        'https://movies-visiting-videos-project-gx9atu8e0-naveedilyas786.vercel.app/'
      ),
    ],
  },
  {
    id: 6,
    featured: false,
    img: Work2,
    company: 'Personal',
    title: 'YouTube App',
    short:
      'YouTube-style video browsing UI with Context API, RapidAPI, and Tailwind CSS.',
    deploylink:
      'https://youtube-clone-tailwind-css-react-js-knuu-o44o8j8ox.vercel.app/',
    comingSoon: false,
    stack: ['React.js', 'Context API', 'Tailwind CSS', 'RapidAPI'],
    bullets: [
      'Recreated core YouTube browsing patterns with a responsive Tailwind layout.',
      'Fetched video data through RapidAPI and shared UI state with Context API.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'YouTube App'),
      detail(<FiUser />, 'API : ', 'RapidAPI'),
      detail(<FaCode />, 'Stack : ', 'React JS, Tailwind CSS'),
      detail(
        <FiExternalLink />,
        'Preview : ',
        'https://youtube-clone-tailwind-css-react-js-knuu-o44o8j8ox.vercel.app/'
      ),
    ],
  },
  {
    id: 7,
    featured: false,
    img: Work4,
    company: 'BuildAi360',
    title: 'Construction Management System',
    short:
      'Dashboards, reporting views, and data visualization for project progress tracking.',
    deploylink: 'https://www.cmsdms.com/',
    comingSoon: false,
    stack: ['React.js', 'Redux Toolkit', 'REST APIs'],
    bullets: [
      'Developed dashboards and reporting surfaces used to monitor project progress.',
      'Integrated REST APIs and reduced unnecessary re-renders on data-heavy screens.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'Construction Management System'),
      detail(<FiUser />, 'Company : ', 'BuildAi360'),
      detail(<FaCode />, 'Stack : ', 'React JS, Redux Toolkit'),
      detail(<FiExternalLink />, 'Preview : ', 'https://www.cmsdms.com/'),
    ],
  },
  {
    id: 8,
    featured: false,
    img: Work3,
    company: 'Personal',
    title: 'Personal Portfolio',
    short:
      'This site is a motion-rich React portfolio built to present production work clearly.',
    deploylink: 'https://my-portfolio-reactjs-opal.vercel.app/',
    comingSoon: false,
    stack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    bullets: [
      'Designed a recruiter-friendly layout with case-study cards and animated page transitions.',
      'Kept theme switching, dark mode, and a focused project narrative aligned with the resume.',
    ],
    details: [
      detail(<FiFileText />, 'Project : ', 'Portfolio'),
      detail(<FiUser />, 'Client : ', 'Self'),
      detail(<FaCode />, 'Stack : ', 'React JS, Framer Motion, Tailwind CSS'),
      detail(<FiExternalLink />, 'Preview : ', 'https://my-portfolio-reactjs-opal.vercel.app/'),
    ],
  },
]

const darkpurple = 'hsl(252, 35%, 51%)'
const lightpurple = 'hsl(271, 76%, 53%)'
const red = 'hsl(4, 93%, 54%)'
const blue = 'hsl(225, 73%, 57%)'
const brown = 'hsl(43, 74%, 49%)'
const pink = 'hsl(339, 81%, 66%)'
const lightgreen = 'hsl(80, 61%, 50%)'
const orange = 'hsl(19, 96%, 52%)'
const darkgreen = 'hsl(88, 65%, 43%)'
const yellow = 'hsl(42, 100%, 50%)'

export const themes = [
  { id: 1, img: Theme1, color: darkpurple },
  { id: 2, img: Theme2, color: red },
  { id: 3, img: Theme3, color: lightpurple },
  { id: 4, img: Theme4, color: blue },
  { id: 5, img: Theme5, color: brown },
  { id: 6, img: Theme6, color: pink },
  { id: 7, img: Theme7, color: lightgreen },
  { id: 8, img: Theme8, color: orange },
  { id: 9, img: Theme9, color: darkgreen },
  { id: 10, img: Theme10, color: yellow },
]
