import { stats } from '../data'
import parse from 'html-react-parser'
import { motion } from 'framer-motion'

const Stats = () => {
  return (
    <>
      {stats.map(({ title, no }, index) => (
        <motion.li
          className='stats__box'
          key={title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <h3 className='stats__no'>{no}</h3>
          <p className='stats__title'>{parse(title)}</p>
        </motion.li>
      ))}
    </>
  )
}

export default Stats
