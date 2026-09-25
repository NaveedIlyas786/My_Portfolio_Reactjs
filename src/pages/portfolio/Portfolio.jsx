import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import PageWrapper from '../../components/PageWrapper'
import './portfolio.css'

const featured = portfolio.filter((item) => item.featured)
const more = portfolio.filter((item) => !item.featured)

const Portfolio = () => {
  return (
    <PageWrapper
      className='portfolio'
      kicker='Selected work'
      title='Production'
      accent='projects'
      subtitle='Products shipped at Tekxai and BuildAi360, plus selected personal apps. Each card opens a short case study with stack and live link.'
    >
      <div className='portfolio__intro glass-panel'>
        <p className='text-sm leading-6 text-[var(--text-color)]'>
          Featured live products first, then more builds below. Open any card
          for the stack, role, and live preview.
        </p>
      </div>

      <div className='project-grid'>
        {featured.map((item, index) => (
          <div
            key={item.id}
            className={index === 0 ? 'project-grid__hero' : undefined}
          >
            <PortfolioItem
              {...item}
              layout={index === 0 ? 'hero' : 'default'}
              index={index + 1}
              priority={index < 2}
            />
          </div>
        ))}
      </div>

      <h3 className='portfolio__more-title'>More projects</h3>
      <div className='project-grid'>
        {more.map((item, index) => (
          <div key={item.id}>
            <PortfolioItem {...item} index={featured.length + index + 1} />
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}

export default Portfolio
