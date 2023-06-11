import React from 'react';
import {logo, close, menu} from '../Assets';
import { navLinks } from '../Constant';
import '../Style/NavBarDos.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY > 50) {
        setScrolled(true)
      } else (
        setScrolled(false)
      )
    }

    window.addEventListener('scroll', onScroll);

    return ()=> window.addEventListener('scroll', onScroll)
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className='img'>
        <img src={logo} alt='logo'/>
      </div>
      <ul className='nav-ul'>
          {navLinks.map((nav, index)=>(
            <li
              key={nav.id}
              className= {`${index === navLinks.length -1 ? "mr-1" : "mr-6"}`}
            >
              <a 
                href={`#${nav.id}`}
                className={activeLink === nav.id ? 'navbar-link' : '' } 
                onClick={()=>onUpdateActiveLink(`${nav.id}`)}
              >
                {nav.title}
              </a>
            </li>
          ))}
      </ul>

      <div className='btn_toggle'>
        <img 
          src={toggle? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={()=> setToggle((prev)=>!prev)}
        />

        <div className={`${toggle ? 'mobile-nav' : 'hidden'}`}>
            <ul>
              {navLinks.map((nav, index)=>(
              <li
                key={nav.id}
                className= {`${index === navLinks.length -1 ? "mr-0" : "mb-4"} text-white`}
              >
                <a 
                  href={`#${nav.id}`}
                  className={activeLink === nav.id ? 'navbar-link' : '' } 
                  onClick={()=>onUpdateActiveLink(`${nav.id}`)}
                >
                  {nav.title}
                </a>
              </li>
              ))}
            </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar