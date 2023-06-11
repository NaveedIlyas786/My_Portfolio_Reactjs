import React, { useEffect, useState } from 'react';
import Close from "../assets/close.svg";
import AOS from 'aos';
import "aos/dist/aos.css"

const PortfolioItem = ({img, title, details, deploylink}) => {
  const [model, setModel]=useState(false);
  // const [mydesc, setMydesc] = useState(null);


  const toggleModel=()=>{
    setModel(!model);
  }
  const gotochrome=()=>{
    window.open(deploylink, "_blank");
  }

    //! For AOS page scrolling Aimation ↴↴
useEffect(()=>{
  AOS.init({duration:2000})
},[])

  return (
    <div className="portfolio__item">
        <img src={img} alt="" className="portfolio__img" />
        <div className="portfolio__hover" onClick={toggleModel}>
          <h2 className="portfolio__title">{title}</h2>
        </div>
        {model && (
          <div className="portfolio__model" >
          <div className="portfolio__model-content" data-aos="fade-down">
            <img src={Close} alt="" className="model__close" onClick={toggleModel} />
              <h3 className='model__title'>{title}</h3>
              <ul className="model__list grid " onClick={gotochrome}>
                {details.map(({icon,title, desc},index)=>{
                  return (
                    
                   <li className="model__item" key={index}>
                    
                     <span>
                        <div className="item__icon">
                          {icon}
                        </div>
                     </span>
                     <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details" >
                      {desc}
                      </span>
                     </div>
                   </li>
                  )
                }
                )
              }
              </ul>
              <button className='deploybtn' onClick={gotochrome}>Preview Deploy Version</button>
              <img src={img} alt="" className="model__img" onClick={gotochrome}/>
          </div>  
        </div>
        )}
    </div>
  )
}

export default PortfolioItem