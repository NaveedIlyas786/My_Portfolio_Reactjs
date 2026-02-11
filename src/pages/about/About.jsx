import { useEffect, useState } from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/Naveed_Resume.pdf'
import Skills from '../../components/Skills'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import './about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ParticlesAnimation from '../../components/particleAnimation/ParticlesAnimation'

const About = () => {
  const [numberOfCircles, setNumberOfCircles] = useState()

  const handleNumberOfCirclesChange = (event) => {
    setNumberOfCircles(Number(event.target.value))
  }

  useEffect(() => {
    const newNumberOfCircles = 25 // Set the desired number of circles
    handleNumberOfCirclesChange({ target: { value: newNumberOfCircles } })
  }, [])

  window.onload = () => {
    const newNumberOfCircles = 25 // Set the desired number of circles
    handleNumberOfCirclesChange({ target: { value: newNumberOfCircles } })
  }

  //! For AOS page scrolling Aimation ↴↴
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <main className='section container'>
      <ParticlesAnimation numberOfCircles={numberOfCircles} />

      <section className='about' data-aos='fade-down'>
        <h2 className='section__title'>
          About <span>Me</span>
        </h2>
        <div className='about__container grid'>
          <div className='about__info'>
            <h3 className='section__subtitle'>Personal Info's</h3>
            <ul className='info__list grid'>
              <Info />
            </ul>
            <a href={CV} download='' className='button'>
              Download Cv
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
      <div className='seperator' data-aos='fade-right'></div>
      <div className='skills' data-aos='fade-up'>
        <h3 className='section__subtitle subtitle__center'>My Skills</h3>
        <div className='skills__container grid'>
          <Skills />
        </div>
      </div>

      <div className='seperator' data-aos='fade-left'></div>
      <div className='resume'>
        <h3 className='section__subtitle subtitle__center'>
          Experience & Education
        </h3>
        <div className='resume__container grid'>
          <div className='resume__data' data-aos='fade-up'>
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
          <div className='resume__data' data-aos='fade-down'>
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
