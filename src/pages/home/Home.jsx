import React, { useState, useEffect } from 'react'
import Profile from '../../assets/home3.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
import ParticlesAnimation from '../../components/particleAnimation/ParticlesAnimation'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const [numberOfCircles, setNumberOfCircles] = useState()
  const [CircleSizeMin, setCircleSizeMin] = useState()
  const [CircleSizeMax, setCircleSizeMax] = useState()

  const handleNumberOfCirclesChange = (event) => {
    setNumberOfCircles(Number(event.target.value))
  }
  const handleNumberOfCirclesSizes = (event) => {
    setCircleSizeMin(Number(event.target.value))
    setCircleSizeMax(Number(event.target.value))
  }

  useEffect(() => {
    const newNumberOfCircles = 5 // Set the desired number of circles
    const newNumberCircleSizeMin = 50 // Set the Min Size of circles
    const newNumberCircleSizeMax = 50 // Set the Max Size number of circles
    handleNumberOfCirclesChange({ target: { value: newNumberOfCircles } })
    handleNumberOfCirclesSizes({ target: { value: newNumberCircleSizeMin } })
    handleNumberOfCirclesSizes({ target: { value: newNumberCircleSizeMax } })
  }, [])

  window.onload = () => {
    const newNumberOfCircles = 5 // Set the desired number of circles
    const newNumberCircleSizeMin = 50 // Set the Min Size of circles
    const newNumberCircleSizeMax = 50 // Set the Max Size number of circles
    handleNumberOfCirclesChange({ target: { value: newNumberOfCircles } })
    handleNumberOfCirclesSizes({ target: { value: newNumberCircleSizeMin } })
    handleNumberOfCirclesSizes({ target: { value: newNumberCircleSizeMax } })
  }

  //! For AOS page scrolling Aimation ↴↴
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section className='home section grid'>
      <ParticlesAnimation
        numberOfCircles={numberOfCircles}
        CircleSizeMin={CircleSizeMin}
        CircleSizeMax={CircleSizeMax}
      />

      <div className='profileimg' data-aos='fade-left'>
        <img src={Profile} alt='Profile Img' className='home_img' />
      </div>

      <div className='home__content' data-aos='fade-up'>
        <div className='home__data'>
          <h1 className='home__title' data-aos='fade-right'>
            I'm Naveed Ilyas. <br />
            <span>Senior React Developer</span>
          </h1>

          <p className='home_description' data-aos='fade-up'>
            Hi, I am Naveed Ilyas, a Senior React Developer with 3+ years of professional experience 
            in building scalable, high-performance web applications. I specialize in React.js, Next.js, 
            TypeScript, and modern frontend architecture. With a proven track record of delivering 15+ 
            successful projects and earning 5+ industry awards, I am passionate about creating 
            exceptional user experiences and writing clean, maintainable code that drives business results.
          </p>
          <Link to='/about' className='button'>
            More About Me
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className='color__block color__block__left'></div>
      <div className='color__block color__block__right'></div>
    </section>
  )
}

export default Home
