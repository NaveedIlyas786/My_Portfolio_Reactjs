import { useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '../data'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='nav'>
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className='nav__list'>
          {links.map(({ name, icon, path }, index) => {
            return (
              <motion.li
                className='nav_item'
                key={name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * index }}
                whileHover={{ scale: 1.08 }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'nav__link active-nav' : 'nav__link')}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className='nav__name'>{name}</h3>
                </NavLink>
              </motion.li>
            )
          })}
        </ul>
      </div>
      <div
        className={`${showMenu ? 'nav__toggle animate--toggle' : 'nav__toggle'}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
