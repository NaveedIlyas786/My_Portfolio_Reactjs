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

import Work1 from './assets/1.png'
import Work2 from './assets/youtube.png'
import Work3 from './assets/HomePortfolio.png'
import Work4 from './assets/firebaseCrud.png'
import Work5 from './assets/ecommerceProject.png'
import Work6 from './assets/JsonCrud.png'

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
    title: 'First Name : ',
    description: 'Naveed',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ilyas',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Pakistani',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Lahore, Punjab Pakistan',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '0092-3034793698',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'naveedilyas321@gmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'English, Urdu',
  },
]

export const stats = [
  {
    id: 1,
    no: '1.5 Years',
    title: '<br /> Experience', //!we will install "html-react-parser" in 'Stats.jsx' to implement break tag (<br/>)
  },

  {
    id: 2,
    no: '06+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '05+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '03+',
    title: ' Awards <br /> Won',
  },
]

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Feb (2024)- Present (2025)',
    title: 'MERN Stack Developer ',
    desc: 'During this period I worked as a MERN Stack Developer and learned different technologies related to MERN Stack',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'August(2022) - Feb (2024)',
    title: 'React.js <span> Developer </span>',
    desc: 'During this period I worked as a React.js Developer and learned different technologies related to React.js',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Feb  -  August (2022)',
    title: 'Learning <span> Web-Development </span>',
    desc: 'After my Graduation I started learning Web-Development and learned Web-Development',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title:
      'Bachelor in Computer Science <span> <br/> ( Comsats University ) </span>',
    desc: 'I passed my degree in Computer Science from Comsats University Islamabad, Vehari Campus, Punjab Pakistan.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Intermediate <span> ( Superior College ) </span>',
    desc: 'I passed my Intermediate Level from Superior College, Vehari Punjab Pakistan.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Matric. <span> Model High School Vehari </span>',
    desc: 'I passed my Matriculation Level from Model High School, Vehari Punjab Pakistan.',
  },
]

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Bootstrap',
    percentage: '85',
  },

  {
    id: 4,
    title: 'Tailwind CSS',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Next.js',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 7,
    title: 'React.js',
    percentage: '80',
  },
  {
    id: 8,
    title: 'Redux Toolkit',
    percentage: '80',
  },
]

export const portfolio = [
  {
    id: 1,
    img: Work1,
    deploylink:
      'https://movies-visiting-videos-project-gx9atu8e0-naveedilyas786.vercel.app/',
    title: ` Movie Website (React JS) "SCSS/SASS" & Redux Toolkit`,

    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Movies Visiting Website',
      },
      {
        icon: <FiUser />,
        title: 'APi : ',
        desc: 'TMDB',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://movies-visiting-videos-project-gx9atu8e0-naveedilyas786.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    deploylink: 'https://youtube-clone-tailwind-css-react-js-knuu.vercel.app/',
    title: 'Youtube Clone using Context_APi "Tailwind CSS"',

    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Youtube Clone',
      },
      {
        icon: <FiUser />,
        title: 'Api : ',
        desc: '"Rapid Api"',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://6467b455cc80c94e16dcc936--taupe-druid-1b777c.netlify.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    deploylink: 'https://my-portfolio-reactjs-opal.vercel.app/',
    title: 'My Portfolio (React JS)',

    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Self',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://my-portfolio-reactjs-opal.vercel.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    deploylink: 'https://react-crud-with-firebase.vercel.app/',
    title: 'React Firebase CRUD  "Bootstrap & CSS"',

    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'React CRUD Firebase',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Self',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://react-crud-with-firebase.vercel.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    deploylink: 'https://react-ecommerce-redux-toolkit-sass.vercel.app/',
    title: 'Ecommerce_ReactJS using Redux Toolkit & SASS/SCSS',

    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Ecommerce',
      },
      {
        icon: <FiUser />,
        title: 'API : ',
        desc: 'platzi fake store api',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://react-ecommerce-redux-toolkit-sass.vercel.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    deploylink: 'https://react-crud-with-json-server-axios.vercel.app/',
    title: 'JSON_SERVER_REACT_CRUD',

    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'JSON SERVER CRUD',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Self',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://react-json-axios-crud.vercel.app/',
      },
    ],
  },
]
// =============Colors================
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
  {
    id: 1,
    img: Theme1,
    color: darkpurple,
  },

  {
    id: 2,
    img: Theme2,
    color: red,
  },

  {
    id: 3,
    img: Theme3,
    color: lightpurple,
  },

  {
    id: 4,
    img: Theme4,
    color: blue,
  },

  {
    id: 5,
    img: Theme5,
    color: brown,
  },

  {
    id: 6,
    img: Theme6,
    color: pink,
  },

  {
    id: 7,
    img: Theme7,
    color: lightgreen,
  },

  {
    id: 8,
    img: Theme8,
    color: orange,
  },

  {
    id: 9,
    img: Theme9,
    color: darkgreen,
  },

  {
    id: 10,
    img: Theme10,
    color: yellow,
  },
]
