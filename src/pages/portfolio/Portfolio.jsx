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
      <div className="portfolio__container container grid" >
        {portfolio.map((val) => {
          return <PortfolioItem key={val.id} {...val} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
