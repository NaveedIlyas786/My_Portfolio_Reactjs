import React, { useEffect, useState } from "react";
import { themes } from "../../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import {MdOutlineColorLens} from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";


const getStorageColor=()=>{
  let color='hsl(252, 35%, 51%)';
  if(localStorage.getItem('color')){
    color=localStorage.getItem('color')
  }
  return color;
}
const getStorageTheme=()=>{
  let theme='lighttheme';
  if(localStorage.getItem('theme')){
    theme=localStorage.getItem('theme')
  }
  return theme;
}

const Themes = () => {
  let mycolor='hsl(252, 35%, 51%)';
  let mytheme='lighttheme';
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme);
  
  const toggleTheme = ()=>{
    if(theme === 'lighttheme'){
      setTheme('darktheme');
    }else{
      setTheme('lighttheme');
    }
  }

  const changeColor=(mycolor)=>{
    setColor(mycolor);
  }

  useEffect(()=>{
    document.documentElement.style.setProperty('--first-color',color);
    localStorage.setItem('color', color);
  },[color])
  
  useEffect(()=>{
    document.documentElement.className=theme;
    localStorage.setItem('theme', theme);
  },[theme])

  return (
    <div>
      <div className={`${showSwitcher ? "show__switcher" :" "} style__switcher`}>
      {/* <div className={`style__switcher`}> */}
        <div className="style__switcher-toggler" onClick={()=>{
          setShowSwitcher(!showSwitcher)
        }}>
          <IoColorPaletteOutline size={25} />
        </div>
        <div className="theme__toggler" onClick={toggleTheme}>
          {theme==='lighttheme'? <BsMoon className="mytransition"/>: <BsSun className="mytransition"/>}
        </div>

        
        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} changeColor={changeColor}/>;
          })}
        </div>
        <div className="style__switcher-close" onClick={()=>{
          setShowSwitcher(!showSwitcher)
        
        }}>&times;</div>


      </div>
    </div>
  );
};

export default Themes;
