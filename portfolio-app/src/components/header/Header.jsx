import React, {useState} from 'react'
import './header.css'

const Header = () => {
    const[Toggle, showMenu]= useState (false);
  return (
   <header className="header">
    <nav className="nav container">
        <div>
            <img src="/nav_logo.png" alt="logo" className="nav__logo"/>
        </div>
        <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" className="nav_link active-link">
                    <img src="/icons/home.png" alt="nav icons" className="nav__icon" />
                    Profile</a>
                </li>
                <li className="nav__item">
                    <a href="#siklls" className="nav_link">
                    <img src="/icons/thinking.png" alt="nav icons" className="nav__icon" />
                    Skills</a>
                </li>
                <li className="nav__item">
                    <a href="#prjoects" className="nav_link">
                    <img src="/icons/briefcase.png" alt="nav icons" className="nav__icon" />
                    Projects</a>
                </li> 
                <li className="nav__item">
                    <a href="#contact" className="nav_link">
                    <img src="/icons/envelope.png" alt="nav icons" className="nav__icon" />
                    Contact</a>
                </li>
            </ul>
            <img src="/icons/cross.png" alt="nav icons" className="nav__close" onClick={()=>showMenu
        (!Toggle)}/>
            {/* <link rel="icon" type="image/svg_xml" href="/icons/cross.svg"  className="nav__close nav__icon" />           */}

        </div>
        
        <div className="nav__toggle" onClick={()=>showMenu
        (!Toggle)}>
            <img src="/icons/apps.png" alt="nav icons"/>
        </div>
    </nav>
   </header>
  )
}

export default Header