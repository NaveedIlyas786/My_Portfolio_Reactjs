import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaEnvelope,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaEnvelopeOpen,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import "./contact.css";
import ParticlesAnimation from "../../components/particleAnimation/ParticlesAnimation";
import AOS from 'aos';
import "aos/dist/aos.css";

const Contact = () => {
  const [numberOfCircles, setNumberOfCircles] = useState();

  const handleNumberOfCirclesChange = (event) => {
    setNumberOfCircles(Number(event.target.value));
  };

  useEffect(() => {
    const newNumberOfCircles = 25; // Set the desired number of circles
    handleNumberOfCirclesChange({ target: { value: newNumberOfCircles } });
  }, []);

  window.onload = () => {
    const newNumberOfCircles = 25; // Set the desired number of circles
    handleNumberOfCirclesChange({ target: { value: newNumberOfCircles } });
  };

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_28lq1bj', 'template_werla75', form.current, 'ZoeGcyZKrJpkFAzfd')
    .then((result) => {
      setIsLoading(false);
      e.target.reset();
      toast.success('Message sent successfully! Thank you for reaching out. I will get back to you soon!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      console.log(result.text);
    }, (error) => {
      setIsLoading(false);
      toast.error('Oops! Something went wrong. Please try again or contact me directly at naveedilyas321@gmail.com', {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      console.log(error.text);
    });
  };


  //! For AOS page scrolling Aimation ↴↴
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <section className="contact section">
      <ParticlesAnimation numberOfCircles={numberOfCircles} />
      <ToastContainer />

      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid" data-aos="fade-up">
        <div className="contact__data">
          <h3 className="contact__title" data-aos="fade-right">Don't be Shy !</h3>
          <p className="contact__description" data-aos="fade-right">
          Feel free to get in touch with me using the given contacts. As an entry-level, I have the confidence to work effectively with React JS.
          </p>
          <div className="contact__info">
            <div className="info__item" data-aos="fade-right">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">naveedilyas321@gmail.com</h4>
              </div>
            </div>
            <div className="info__item" data-aos="fade-up">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call / Watsapp</span>
                <h4 className="info__desc">0092 3034793698</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://web.facebook.com/naveedilyas2?_rdc=1&_rdr" target="_blank" className="contact__social-link" data-aos="fade-up">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/naveed-ilyas-222679350/" target="_blank" className="contact__social-link" data-aos="fade-up">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/channel/UCZXWV9IFXyzoN37TegrEquA" target="_blank" className="contact__social-link" data-aos="fade-up">
              <FaYoutube />
            </a>
            <a href="https://github.com/NaveedIlyas786" target="_blank" className="contact__social-link" data-aos="fade-down">
              <BsGithub size={17} />
            </a>
          </div>
        </div>
        {/* //! Contact Form to send Email */}
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div" data-aos="fade-left">
              <input
                required
                type="text"
                placeholder="Your Name"
                name="name"
                className="form__control"
              />
            </div>
            <div className="form__input-div" data-aos="fade-left">
              <input
                required
                type="email"
                placeholder="Your Email"
                name="email"
                className="form__control"
              />
            </div>
            
          </div>
          <div className="form__input-div" data-aos="fade-up">
            <input
              required
              type="text"
              placeholder="Subject"
              name="subject"
              className="form__control"
            />
          </div>
          <div className="form__input-div" data-aos="fade-right">
            <textarea
              required
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button
            className="button"
            type="submit"
            value="Send"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="button__icon contact__button-icon">
                  <FiSend />
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
