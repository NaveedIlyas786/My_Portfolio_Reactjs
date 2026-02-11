import { useState, useEffect } from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";
import ParticlesAnimation from "../../components/particleAnimation/ParticlesAnimation";
import AOS from 'aos';
import "aos/dist/aos.css";


const Portfolio = () => {
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


  //! For AOS page scrolling Aimation ↴↴
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <section className="portfolio section" data-aos="fade-up">
      <ParticlesAnimation numberOfCircles={numberOfCircles} />

      <h2 className="section__title" >
        My <span>Portfolio</span>
      </h2>

      {/* Professional Note */}
      <div className="portfolio__note" data-aos="fade-down">
        <div className="portfolio__note-content">
          <svg className="portfolio__note-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="portfolio__note-title">Professional Portfolio Showcase</h3>
            <p className="portfolio__note-text">
              Throughout my 3+ years of professional experience, I've developed numerous enterprise-level 
              applications and client projects. Due to company confidentiality agreements and non-disclosure 
              policies, many of these projects cannot be publicly showcased. The following represents a curated 
              selection of personal and publicly available projects that demonstrate my technical expertise and 
              development capabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio__container container grid" >
        {portfolio.map((val) => {
          return <PortfolioItem key={val.id} {...val} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
