import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiCpu, FiLayers, FiZap } from 'react-icons/fi'
import Profile from '../../assets/home3.jpg'
import CV from '../../assets/Naveed_Resume.pdf'
import { portfolio } from '../../data'
import ParticlesAnimation from '../../components/particleAnimation/ParticlesAnimation'
import PageWrapper from '../../components/PageWrapper'
import PortfolioItem from '../../components/PortfolioItem'
import './home.css'
import '../portfolio/portfolio.css'

const roles = ['Frontend Engineer', 'React & Next.js Developer', 'TypeScript Developer']
const preview = portfolio.filter((item) => item.featured).slice(0, 3)
const stack = ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS']
const marquee = [
  'React.js',
  'Next.js',
  'TypeScript',
  'TanStack Query',
  'Zustand',
  'Redux Toolkit',
  'Tailwind CSS',
  'Shadcn UI',
  'Socket.IO',
  'Framer Motion',
  'REST APIs',
  'i18n / RTL',
]
const orbit = ['React', 'Next.js', 'TypeScript', 'TanStack', 'Redux Toolkit']
const highlights = [
  {
    icon: <FiZap />,
    title: 'Production, not prototypes',
    copy: 'Live React and Next.js apps used by real teams: auth, billing, and messy workflows included.',
  },
  {
    icon: <FiLayers />,
    title: 'Complex product surfaces',
    copy: 'Multi-role dashboards, RBAC, and real-time UI that stays in sync as the data moves.',
  },
  {
    icon: <FiCpu />,
    title: 'Handoff-ready craft',
    copy: 'TypeScript components and predictable data-fetching that other engineers can keep shipping.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.16 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.4 })
  const springY = useSpring(my, { stiffness: 70, damping: 18, mass: 0.4 })
  const photoX = useTransform(springX, (value) => value * 16)
  const photoY = useTransform(springY, (value) => value * 12)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  const handlePointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    mx.set((event.clientX - bounds.left) / bounds.width - 0.5)
    my.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  return (
    <PageWrapper className='home-page'>
      <ParticlesAnimation id='tsparticles-home' numberOfCircles={26} CircleSizeMin={1} CircleSizeMax={3} />

      <section className='home' onPointerMove={handlePointer} onPointerLeave={() => { mx.set(0); my.set(0) }}>
        <span className='home__spark home__spark--one' aria-hidden='true' />
        <span className='home__spark home__spark--two' aria-hidden='true' />
        <span className='home__spark home__spark--three' aria-hidden='true' />

        <motion.div
          className='home__stage'
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className='home__stage-inner' style={{ x: photoX, y: photoY }}>
            <span className='home__glow' aria-hidden='true' />
            <div className='home__photo'>
              <img src={Profile} alt='Naveed Ilyas' />
              <div className='home__orbit-cluster'>
                {orbit.map((chip) => (
                  <span className='home__orbit' key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <motion.aside
              className='home__float home__float--job'
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className='home__float-dot' />
              Currently at Tekxai
            </motion.aside>
            <motion.aside
              className='home__float home__float--live'
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <span className='home__float-dot' />
              Open to roles
            </motion.aside>
          </motion.div>
        </motion.div>

        <motion.div className='home__content' variants={container} initial='hidden' animate='show'>
          <motion.span className='home__badge' variants={item}>
            Available for frontend roles
          </motion.span>
          <motion.p className='home__meta' variants={item}>
            Lahore, Pakistan · 3+ years · Tekxai · BuildAi360
          </motion.p>
          <motion.h1 className='home__title' variants={item}>
            I&apos;m Naveed Ilyas.
            <span className='home__role'>
              <AnimatePresence mode='wait'>
                <motion.em
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                  transition={{ duration: 0.28 }}
                >
                  {roles[roleIndex]}
                </motion.em>
              </AnimatePresence>
            </span>
          </motion.h1>
          <motion.p className='home_description' variants={item}>
          I help product teams turn complex requirements into fast, scalable React and Next.js interfaces that hold up in production, with clean architecture, multi-role access, live data, and polished UI that stays responsive as the product grows.
          </motion.p>
          <motion.div className='home__stack' variants={item}>
            {stack.map((tech, index) => (
              <motion.span
                className='ui-chip'
                key={tech}
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 420, damping: 18 }}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className='home__actions' variants={item}>
            <Link to='/portfolio' className='button'>
              View my work
              <span className='button__icon'>
                <FaArrowRight />
              </span>
            </Link>
            <a href={CV} download className='button button--ghost'>
              Download CV
              <span className='button__icon'>
                <FaDownload />
              </span>
            </a>
          </motion.div>
          <motion.div className='home__socials' variants={item}>
            <a
              href='https://www.linkedin.com/in/naveed-ilyas-222679350'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <BsLinkedin />
            </a>
            <a href='https://github.com/NaveedIlyas786' target='_blank' rel='noreferrer' aria-label='GitHub'>
              <BsGithub />
            </a>
            <a href='mailto:naveedilyas115@gmail.com'>naveedilyas115@gmail.com</a>
          </motion.div>
        </motion.div>
      </section>

      <div className='home-marquee' aria-hidden='true'>
        <div className='home-marquee__track'>
          {[...marquee, ...marquee].map((tech, index) => (
            <span key={`${tech}-${index}`}>
              {tech}
              <i />
            </span>
          ))}
        </div>
      </div>

      <section className='home-highlights' id='home-highlights'>
        <div className='home-highlights__head'>
          <span className='section-label'>What I bring</span>
          <h2>Clear proof for a frontend hire, then the deeper story.</h2>
        </div>
        <div className='home-highlights__grid'>
          {highlights.map((card, index) => (
            <motion.article
              className='home-highlight glass-panel'
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <span className='home-highlight__icon'>{card.icon}</span>
              <span className='home-highlight__index'>0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className='home-selected' id='selected-work'>
        <div className='home-selected__head'>
          <div>
            <span className='section-label'>Selected work</span>
            <h2>Recent production projects</h2>
            <p className='home-selected__note'>
              I&apos;ve shipped many more than this page can hold. What&apos;s here is a shortlist of the
              projects that best show how I build.
            </p>
          </div>
          <Link to='/portfolio' className='home-selected__link'>
            View all work
            <FaArrowRight />
          </Link>
        </div>
        <div className='home-selected__grid'>
          {preview.map((project, index) => (
            <PortfolioItem key={project.id} {...project} index={index + 1} />
          ))}
        </div>
      </section>

      <motion.section
        className='home-next glass-panel'
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div>
          <span className='section-label'>Keep going</span>
          <h2>The about page has the story. Portfolio has the proof.</h2>
          <p>If this already feels like a fit, the rest of the site is worth the click.</p>
        </div>
        <div className='home-next__actions'>
          <Link to='/about' className='button'>
            About me
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
          <Link to='/contact' className='button button--ghost'>
            Let&apos;s talk
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </motion.section>
    </PageWrapper>
  )
}

export default Home
