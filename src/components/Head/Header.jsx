import React, {useRef, useEffect} from 'react';
import '../../styles/header.scss'
import logo from '../../assets/img/dumble.png'
import {Outlet, Link} from 'react-router-dom'
import "./index.scss"
import { Authenticate } from '../../features/slices/AuthSlice';

import {useSelector} from 'react-redux'

 

const nav__links=[
 
  {
    path:"#schedule",
    display: "Schedule"
  },
  {
    path:"#classes",
    display: "classes"
  },
  {
    path:"#pricing-plan",
    display: "pricing"
  },
  {
    path:"#testimonials",
    display: "Testimonials"
  },

]
const Header = () => {
  const headerRef=useRef(null)
  const toggle_menu=useRef(null)
  const toggle_user=useRef(null)
  const auth=useSelector(Authenticate)

  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current?.classList?.add("sticky__header")
      }else{
        headerRef.current?.classList?.remove("sticky__header")
      }
    })
  }
  useEffect(()=>{
  stickyHeaderFunc()
  return ()=> window.removeEventListener("scroll", stickyHeaderFunc);
  },[])

  const handleClick=e=>{
    e.preventDefault()
    const targetAttr= e.target.getAttribute("href")
    const location= document.querySelector(targetAttr).offsetTop
    window.scrollTo({
      left:0,
      top:location-80,
    })


  }

  const mediaMenu=()=>{
    toggle_menu.current.classList.toggle("toggle__menu")
    toggle_user.current.classList.remove("toggle__user")
  }

  const userMenu=()=>{
    toggle_user.current.classList.toggle("toggle__user")
    toggle_menu.current.classList.remove("toggle__menu")
  }

  return<> 
  <nav className="header">
    
    <div className="header__left">
    <div className='logo'>
    <img src={logo} alt="" />
    </div>
      <h4>FitBody</h4>
    </div>

    <div className="header__center">
      <ul className='display' ref={toggle_menu}>
        <li className='home'><Link to="/">Home</Link></li>
        {
          nav__links.map(item=>(
            <li key={item.display} className='header__item' ocClick={handleClick}><a href={item.path}>{item.display}</a></li>
          ))
        }
      </ul>
    </div>

    <div className="header__right display" ref={toggle_user}>
        <Link  to="/login" className="login__btn">Login</Link>
        <Link to="/register" className="register__btn">Register</Link>

    </div>
    
    <div className="mobile__menu">
        <span className="mobile__item" onClick={userMenu}>
            <i className="ri-user-line"></i>
        </span>
    </div>
    
    <div className="mobile__menu">
      <span className="mobile__item" onClick={mediaMenu}>
          <i className="ri-menu-line"></i>
      </span>
    </div>
  </nav>
  <Outlet/>
  </>
}

export default Header;

{/* <header className="container" ref={headerRef}>
    <div className="header">
      <div className="nav__wrapper">
        
            <div className="logo">
                  <div className="logo__img">
                    <img src={logo} alt="" />
                  </div>
                  <h2>FitBody</h2>
            </div>
         
         
              <div className="navigation">
                <ul className="menu" ref={toggle_menu} data-aos="zoom-in" data-aos-duration="2000">
                <Link to="." className='home'>Home</Link>
                    {
                      nav__links.map((item, index)=>(
                        <li key={index} className="nav__item">
                          <a onClick={handleClick} href={item.path} data-aos="zoom-out" data-aos-duration="2000">{item.display}</a>
                        </li>
                      ))
                    }
                    {!auth? <Link to="login" >
                <button className="btn btn-success rounded-pill">
                  Login
                </button>
                </Link>:null}
                {!auth?<Link to="register" >
                <button className="btn btn-primary rounded-pill">
                  Register
                </button>
                </Link>:null}
                </ul>
              </div>
          
          
              <div className="nav__right">
                <span className="mobile__menu" onClick={mediaMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
      </div>
    </div>
  </header>
  <Outlet/> */}