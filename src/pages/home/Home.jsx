import { Link } from 'react-router-dom'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiCpu, FiLayers, FiZap } from 'react-icons/fi'
import Profile from '../../assets/home3.jpg'
import CV from '../../assets/Naveed_Resume.pdf'
import { portfolio } from '../../data'
import PageWrapper from '../../components/PageWrapper'
import PortfolioItem from '../../components/PortfolioItem'
import './home.css'
import '../portfolio/portfolio.css'

const roles = [
  'Frontend Engineer',
  'React & Next.js Developer',
  'TypeScript Developer',
]
const preview = portfolio.filter((item) => item.featured).slice(0, 3)
const stack = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Redux Toolkit',
  'TanStack Query',
  'Tailwind CSS',
]
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

const Home = () => {
  return (
    <PageWrapper className='home-page'>
      <section className='home'>
        <span className='home__spark home__spark--one' aria-hidden='true' />
        <span className='home__spark home__spark--two' aria-hidden='true' />
        <span className='home__spark home__spark--three' aria-hidden='true' />

        <div className='home__stage'>
          <div className='home__stage-inner'>
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

            <aside className='home__float home__float--job'>
              <span className='home__float-dot' />
              Currently at Tekxai
            </aside>
            <aside className='home__float home__float--live'>
              <span className='home__float-dot' />
              Open to roles
            </aside>
          </div>
        </div>

        <div className='home__content'>
          <span className='home__badge'>Available for frontend roles</span>
          <p className='home__meta'>
            Lahore, Pakistan · 3+ years · Tekxai · BuildAi360
          </p>
          <h1 className='home__title'>
            I&apos;m Naveed Ilyas.
            <span className='home__role'>
              <em>{roles[0]}</em>
            </span>
          </h1>
          <p className='home_description'>
            I help product teams turn complex requirements into fast, scalable
            React and Next.js interfaces that hold up in production, with clean
            architecture, multi-role access, live data, and polished UI that
            stays responsive as the product grows.
          </p>
          <div className='home__stack'>
            {stack.map((tech, index) => (
              <span
                className='ui-chip'
                key={tech}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='home__actions'>
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
          </div>
          <div className='home__socials'>
            <a
              href='https://www.linkedin.com/in/naveed-ilyas-222679350'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <BsLinkedin />
            </a>
            <a
              href='https://github.com/NaveedIlyas786'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              <BsGithub />
            </a>
            <a href='mailto:naveedilyas115@gmail.com'>
              naveedilyas115@gmail.com
            </a>
          </div>
        </div>
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
            <article className='home-highlight glass-panel' key={card.title}>
              <span className='home-highlight__icon'>{card.icon}</span>
              <span className='home-highlight__index'>0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='home-selected' id='selected-work'>
        <div className='home-selected__head'>
          <div>
            <span className='section-label'>Selected work</span>
            <h2>Recent production projects</h2>
            <p className='home-selected__note'>
              I&apos;ve shipped many more than this page can hold. What&apos;s
              here is a shortlist of the projects that best show how I build.
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

      <section className='home-next glass-panel'>
        <div>
          <span className='section-label'>Keep going</span>
          <h2>The about page has the story. Portfolio has the proof.</h2>
          <p>
            If this already feels like a fit, the rest of the site is worth the
            click.
          </p>
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
      </section>
    </PageWrapper>
  )
}

export default Home
