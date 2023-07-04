import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FcApproval } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

import {
  FaEnvelope,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import {   BsGithub } from "react-icons/bs";
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ie9qxq2', 'template_werla75', form.current, 'ZoeGcyZKrJpkFAzfd')
    .then((result) => {
      e.target.reset();
      console.log(result.text);
      console.log("Email Sent !");
    }, (error) => {
        console.log(error.text);
    });
  };

  const [showSuccess, setShowSuccess] = useState(false);

  const closeMessage = () => {
    setShowSuccess(false);
  };
  const handleClick = () => {
    setShowSuccess(true);
  };


  //! For AOS page scrolling Aimation ↴↴
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <section className="contact section">
      <ParticlesAnimation numberOfCircles={numberOfCircles} />

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
            <a href="https://www.instagram.com/naveedilyas321/" target="_blank" className="contact__social-link" data-aos="fade-down">
              <FaInstagram />
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
          <div className="form__input-div" data-aos="fade-right">
            <textarea
              required
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
            ></textarea>
          </div>

          <div >
            {showSuccess && (
              <div className="success-overlay" data-aos="fade-up">
                <div className="success-popup" >
                  <FcCheckmark className="tick" size={80} />
                  <p className="messagee">
                    Your Email To "Naveed Ilyas" has been Sent Successfully ...
                    !
                    <span className="span">
                      <br /> I will contact you Soon 😊
                    </span>
                  </p>
                  <button className="closebtn" onClick={closeMessage}>
                    Close
                  </button>
                </div>
              </div>
            )}

          </div>
            <button
              className="button"
              type="submit"
              value="Send"
              onClick={handleClick}
            >
              Send Me
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
