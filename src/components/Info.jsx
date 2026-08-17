import { FiUser, FiClock, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data'

const icons = {
  1: <FiUser />,
  2: <FiClock />,
  3: <FiMapPin />,
  4: <FiPhone />,
  5: <FiMail />,
}

const Info = () => {
  return (
    <>
      {personalInfo.map(({ id, title, description, href }) => {
        const value = href ? (
          <a href={href}>{description}</a>
        ) : (
          description
        )

        return (
          <li
            className={`info__item${id === 1 ? ' info__item--featured' : ''}${id === 4 || id === 5 ? ' info__item--wide' : ''}`}
            key={id}
          >
            <span className='info__icon' aria-hidden='true'>
              {icons[id]}
            </span>
            <span className='info__copy'>
              <span className='info__title'>{title}</span>
              <span className='info__description'>{value}</span>
            </span>
          </li>
        )
      })}
    </>
  )
}

export default Info
