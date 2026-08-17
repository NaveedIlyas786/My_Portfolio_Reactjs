import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedinIn } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import ParticlesAnimation from '../../components/particleAnimation/ParticlesAnimation'
import PageWrapper from '../../components/PageWrapper'
import './contact.css'

const highlights = ['Frontend roles', 'React / Next.js products', 'Multi-role dashboards', 'Contract collaborations']

const Contact = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (event) => {
    event.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm('service_28lq1bj', 'template_werla75', form.current, 'ZoeGcyZKrJpkFAzfd')
      .then(() => {
        setIsLoading(false)
        event.target.reset()
        toast.success('Message sent. I will get back to you soon.', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'colored',
        })
      })
      .catch(() => {
        setIsLoading(false)
        toast.error('Something went wrong. Email me directly at naveedilyas115@gmail.com', {
          position: 'top-right',
          autoClose: 6000,
          theme: 'colored',
        })
      })
  }

  return (
    <PageWrapper
      className='contact'
      kicker='Contact'
      title='Get In'
      accent='Touch'
      subtitle='Open to frontend roles and product collaborations. If you need a React / Next.js engineer who can own multi-role workflows, I would like to hear from you.'
    >
      <ParticlesAnimation id='tsparticles-contact' numberOfCircles={16} CircleSizeMin={1} CircleSizeMax={3} />
      <ToastContainer />

      <div className='contact__container grid'>
        <motion.div className='contact__data glass-panel' initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <span className='home__badge contact__badge'>Usually replies within 24 hours</span>
          <h3 className='contact__title'>Let&apos;s work together</h3>
          <p className='contact__description'>
            Send a note about the role, product, or collaboration. I am especially interested in
            production frontend work with TypeScript, React, and Next.js.
          </p>
          <div className='contact__chips'>
            {highlights.map((item) => (
              <span className='ui-chip' key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className='contact__info'>
            <a className='info__item' href='mailto:naveedilyas115@gmail.com'>
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>naveedilyas115@gmail.com</h4>
              </div>
            </a>
            <a className='info__item' href='tel:+923034793698'>
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>Call / WhatsApp</span>
                <h4 className='info__desc'>+92 303 4793698</h4>
              </div>
            </a>
          </div>
          <div className='contact__socials'>
            <a
              href='https://www.linkedin.com/in/naveed-ilyas-222679350/'
              target='_blank'
              rel='noreferrer'
              className='contact__social-link'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn />
            </a>
            <a
              href='https://github.com/NaveedIlyas786'
              target='_blank'
              rel='noreferrer'
              className='contact__social-link'
              aria-label='GitHub'
            >
              <BsGithub size={17} />
            </a>
          </div>
        </motion.div>
        <motion.form
          className='contact__form'
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <div className='form__input-group'>
            <div className='form__input-div'>
              <label htmlFor='name'>Name</label>
              <input required id='name' type='text' placeholder='Your name' name='name' className='form__control' />
            </div>
            <div className='form__input-div'>
              <label htmlFor='email'>Email</label>
              <input required id='email' type='email' placeholder='you@email.com' name='email' className='form__control' />
            </div>
          </div>
          <div className='form__input-div'>
            <label htmlFor='subject'>Subject</label>
            <input required id='subject' type='text' placeholder='Role, product, or collaboration' name='subject' className='form__control' />
          </div>
          <div className='form__input-div'>
            <label htmlFor='message'>Message</label>
            <textarea
              required
              id='message'
              placeholder='A short note about what you are building'
              name='message'
              className='form__control textarea'
            ></textarea>
          </div>
          <button className='button' type='submit' disabled={isLoading}>
            {isLoading ? (
              <>
                <span className='spinner'></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className='button__icon contact__button-icon'>
                  <FiSend />
                </span>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </PageWrapper>
  )
}

export default Contact
