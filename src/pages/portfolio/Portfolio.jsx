import { portfolio } from '../../data'
import { motion } from 'framer-motion'
import PortfolioItem from '../../components/PortfolioItem'
import ParticlesAnimation from '../../components/particleAnimation/ParticlesAnimation'
import PageWrapper from '../../components/PageWrapper'
import './portfolio.css'

const featured = portfolio.filter((item) => item.featured)
const more = portfolio.filter((item) => !item.featured)

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const Portfolio = () => {
  return (
    <PageWrapper
      className='portfolio'
      kicker='Selected work'
      title='Production'
      accent='projects'
      subtitle='Products shipped at Tekxai and BuildAi360, plus selected personal apps. Each card opens a short case study with stack and live link.'
    >
      <ParticlesAnimation id='tsparticles-portfolio' numberOfCircles={16} CircleSizeMin={1} CircleSizeMax={3} />

      <motion.div className='portfolio__intro glass-panel' initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className='text-sm leading-6 text-[var(--text-color)]'>
          Featured live products first, then more builds below. Open any card for the stack, role,
          and live preview.
        </p>
      </motion.div>

      <motion.div className='project-grid' variants={list} initial='hidden' animate='show'>
        {featured.map((item, index) => (
          <motion.div key={item.id} className={index === 0 ? 'project-grid__hero' : undefined} variants={card}>
            <PortfolioItem {...item} layout={index === 0 ? 'hero' : 'default'} index={index + 1} />
          </motion.div>
        ))}
      </motion.div>

      <h3 className='portfolio__more-title'>More projects</h3>
      <motion.div
        className='project-grid'
        variants={list}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.12 }}
      >
        {more.map((item, index) => (
          <motion.div key={item.id} variants={card}>
            <PortfolioItem {...item} index={featured.length + index + 1} />
          </motion.div>
        ))}
      </motion.div>
    </PageWrapper>
  )
}

export default Portfolio
