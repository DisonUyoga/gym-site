import './index.scss'
import logo from '../../../assets/img/dumble.png'
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className="footer"
  data-aos="fade-up"
  data-aos-duration="1500"
  >
    <div className="container">
      <div className="footer__wrapper">
            
            <div className="footer__box">
            <div className="logo">
                  <div className="logo__img">
                    <img src={logo} alt="" />
                  </div>
                  <h2>FitBody</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut, dolor aspernatur optio, reiciendis non culpa eum asperiores accusantium rem ea pariatur nemo itaque vel quis tempore, ipsa quidem obcaecati.
            </p>
            </div>
        
        
        <div className="footer__box">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__links">
            <li><a href="#">Our program</a></li>
            <li><a href="#">Our plan</a></li>
            <li><a href="#">Become a member</a></li>
          </ul>
        </div>

        <div className="footer__box">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer__box">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        
      </div>
      <p className='copyright'>Copyright &#169; {year}. Developed by Dison. All rights reserved </p>
    </div>
  </footer>
}

export default Footer;
