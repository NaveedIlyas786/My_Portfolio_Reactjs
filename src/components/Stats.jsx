import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser'; //! We installed "html-react-parser" to implement parse an Html element means e:g:: tto implement break points on html without it 'break tag' (<br/>) will not work
import ParticlesAnimation from './particleAnimation/ParticlesAnimation';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
const Stats = () => {

    //! For AOS page scrolling Aimation ↴↴
useEffect(()=>{
  AOS.init({duration:2000})
},[]) 

  return (
    <>
    {stats.map(({title,no}, index)=>{
     return (
       <li className="stats__box" key={index} data-aos="fade-left">
         <h3 className="stats__no">{no}</h3>
         <p className="stats__title">{parse(title)}</p>
       </li>
     )
    })}
    </>
   )
}

export default Stats