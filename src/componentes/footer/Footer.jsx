import React from 'react';
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { MdLaptopMac } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <div className="footer__name">
        <span className='icon__lap'> <MdLaptopMac/> </span>
        <a href="#home" className='footer__logo'> Jhonny Quiliche </a>
        <span className='icon__lap'> <MdLaptopMac/> </span>
      </div>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contactame</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jhonny Developer, Todos los derechos reservados</small>
      </div>

    </footer>
  )
}

export default Footer