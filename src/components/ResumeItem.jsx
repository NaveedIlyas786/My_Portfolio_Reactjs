import parse from 'html-react-parser'
import { motion } from 'framer-motion'

const ResumeItem = ({ icon, year, title, desc, points = [] }) => {
  return (
    <motion.div
      className='resume__item'
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='resume__icon'>{icon}</div>
      <span className='resume__date'>{year}</span>
      <h3 className='resume__Subtitle'>{parse(title)}</h3>
      {desc && <p className='resume__description'>{desc}</p>}
      {points.length > 0 && (
        <ul className='resume__points'>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default ResumeItem
