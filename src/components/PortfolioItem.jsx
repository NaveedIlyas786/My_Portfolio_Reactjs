import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiExternalLink, FiStar } from 'react-icons/fi'
import Dialog from './ui/Dialog'

const ProjectImage = ({
  src,
  alt,
  priority = false,
  className = '',
  sizes = '(min-width: 768px) 50vw, 100vw',
}) => {
  const imageRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const node = imageRef.current
    if (node?.complete && node.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`${className} ${loaded ? 'is-loaded' : ''}`.trim()}
      width={1400}
      height={788}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding='async'
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
    />
  )
}

const PortfolioItem = ({
  img,
  title,
  details,
  deploylink,
  company,
  short,
  stack = [],
  bullets = [],
  comingSoon,
  featured,
  layout = 'default',
  index,
  priority = false,
}) => {
  const [open, setOpen] = useState(false)
  const isHero = layout === 'hero'
  const number = String(index).padStart(2, '0')

  const openLive = () => {
    if (!deploylink) return
    window.open(deploylink, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <article
        className={`project-card ${isHero ? 'project-card--hero' : ''} ${featured ? 'project-card--featured' : ''}`}
      >
        <button type='button' className='project-card__button' onClick={() => setOpen(true)}>
          <div className='project-card__media'>
            <ProjectImage
              src={img}
              alt={title}
              priority={priority}
              sizes={isHero ? '(min-width: 768px) 58vw, 100vw' : '(min-width: 768px) 42vw, 100vw'}
            />
            <span className='project-card__shine' aria-hidden='true' />
            <div className='project-card__badges'>
              {comingSoon ? (
                <span className='project-badge project-badge--soon'>Demo soon</span>
              ) : (
                <span className='project-badge project-badge--live'>
                  <span className='project-badge__dot' aria-hidden='true' />
                  Live
                </span>
              )}
              {featured && (
                <span className='project-badge project-badge--featured'>
                  <FiStar aria-hidden='true' />
                  Featured
                </span>
              )}
            </div>
            {typeof index === 'number' && <span className='project-card__index'>{number}</span>}
          </div>
          <div className='project-card__body'>
            <p className='project-card__company'>{company}</p>
            <h3 className='project-card__title'>{title}</h3>
            <p className='project-card__copy'>{short}</p>
            {isHero && bullets[0] && <p className='project-card__highlight'>{bullets[0]}</p>}
            <div className='project-card__stack'>
              {(isHero ? stack : stack.slice(0, 4)).map((tech) => (
                <span className='ui-chip' key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <span className='project-card__cta'>
              View case study
              <FiArrowUpRight />
            </span>
          </div>
        </button>
      </article>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className='ui-dialog-media-wrap'>
          <ProjectImage
            src={img}
            alt={title}
            priority
            className='ui-dialog-media'
            sizes='(min-width: 820px) 772px, 100vw'
          />
        </div>
        <div className='ui-dialog-kicker'>
          {comingSoon ? (
            <span className='ui-chip soon'>Demo coming soon</span>
          ) : (
            <span className='ui-chip live'>Live product</span>
          )}
          {company && <span className='ui-chip'>{company}</span>}
        </div>
        <h3 className='ui-dialog-title'>{title}</h3>
        <p className='ui-dialog-short'>{short}</p>
        {bullets.length > 0 && (
          <ul className='ui-dialog-list'>
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <ul className='ui-dialog-meta'>
          {details.map(({ icon, title: label, desc }, detailIndex) => {
            const isUrl = typeof desc === 'string' && /^https?:\/\//i.test(desc)

            return (
              <li className='ui-dialog-meta-item' key={`${label}-${detailIndex}`}>
                <span>{icon}</span>
                <span>
                  <strong>{label}</strong>
                  {isUrl ? (
                    <a
                      href={desc}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ui-dialog-link'
                    >
                      {desc}
                    </a>
                  ) : (
                    desc
                  )}
                </span>
              </li>
            )
          })}
        </ul>
        <div className='ui-dialog-stack'>
          {stack.map((tech) => (
            <span className='ui-chip' key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className='ui-dialog-actions'>
          {comingSoon || !deploylink ? (
            <button type='button' className='button' disabled>
              Live demo coming soon
            </button>
          ) : (
            <button type='button' className='button' onClick={openLive}>
              Open live site
              <span className='button__icon'>
                <FiExternalLink />
              </span>
            </button>
          )}
        </div>
      </Dialog>
    </>
  )
}

export default PortfolioItem
