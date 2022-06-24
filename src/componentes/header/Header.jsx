import React from 'react';
import './header.css';
import CTA from './CTA'
import YO from '../../assets/img/yo.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola Soy</h5>
        <h1 className='nombre'>Jhonny Quiliche</h1>
        <h5 className='text-light'>Desarrollador Fullstack</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={YO} alt='yo'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;