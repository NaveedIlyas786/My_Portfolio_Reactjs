import Info from '../../components/Info'
import Stats from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import CV from '../../assets/Naveed_Resume.pdf'
import { resume, skillGroups } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import ParticlesAnimation from '../../components/particleAnimation/ParticlesAnimation'
import PageWrapper from '../../components/PageWrapper'
import './about.css'

const focusAreas = [
  {
    title: 'Product frontend',
    copy: 'Own React and Next.js features from UI through API integration and release-ready polish.',
  },
  {
    title: 'Complex workflows',
    copy: 'Multi-role dashboards, RBAC, protected routing, and real-time updates that stay in sync.',
  },
  {
    title: 'Reliable delivery',
    copy: 'TypeScript components, TanStack Query, and performance-minded rendering for production apps.',
  },
]

const About = () => {
  return (
    <PageWrapper
      className='about-page'
      kicker='About'
      title='About'
      accent='Me'
      subtitle='Comfortable owning features from requirements through polished delivery, collaborating with design and backend, and improving performance across the frontend.'
    >
      <ParticlesAnimation id='tsparticles-about' numberOfCircles={16} CircleSizeMin={1} CircleSizeMax={3} />

      <section className='about'>
        <motion.div
          className='about__hero glass-panel'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className='about__role'>Frontend Engineer · Lahore, Pakistan</p>
          <h3>Building production interfaces for multi-role products.</h3>
          <p>
            I work closest to the product surface: reusable TypeScript components, auth-aware
            routing, and data-fetching that stays predictable as features grow.
          </p>
        </motion.div>

        <div className='about__focus'>
          {focusAreas.map((item, index) => (
            <motion.article
              className='glass-panel about__focus-card'
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <span>0{index + 1}</span>
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </motion.article>
          ))}
        </div>

        <div className='about__container grid'>
          <div className='about__info glass-panel'>
            <span className='section-label'>Details</span>
            <h3 className='section__subtitle'>Personal info</h3>
            <ul className='info__list'>
              <Info />
            </ul>
            <a href={CV} download className='button'>
              Download CV
              <span className='button__icon'>
                <FaDownload />
              </span>
            </a>
          </div>
          <div className='states grid'>
            <Stats />
          </div>
        </div>
      </section>

      <div className='seperator'></div>

      <section className='skills'>
        <span className='section-label'>Toolkit</span>
        <h3 className='section__subtitle subtitle__center'>Technical Skills</h3>
        <div className='skill-groups'>
          {skillGroups.map((group, index) => (
            <motion.article
              className='skill-group'
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <h4>{group.title}</h4>
              <div className='skill-group__items'>
                {group.items.map((item) => (
                  <span className='ui-chip' key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className='seperator'></div>

      <section className='resume'>
        <span className='section-label'>Timeline</span>
        <h3 className='section__subtitle subtitle__center'>Experience & Education</h3>
        <div className='resume__container grid'>
          <div className='resume__data'>
            {resume
              .filter((item) => item.category === 'experience')
              .map((item) => (
                <ResumeItem key={item.id} {...item} />
              ))}
          </div>
          <div className='resume__data'>
            {resume
              .filter((item) => item.category === 'education')
              .map((item) => (
                <ResumeItem key={item.id} {...item} />
              ))}
          </div>
        </div>
      </section>

      <motion.aside
        className='learning'
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className='learning__label'>Currently learning</p>
        <h3>Stronger full-stack delivery</h3>
        <p>
          Node.js, Express.js, MongoDB, PostgreSQL, Prisma, and Next.js backend architecture,
          expanding from frontend ownership toward end-to-end product work.
        </p>
      </motion.aside>
    </PageWrapper>
  )
}

export default About
