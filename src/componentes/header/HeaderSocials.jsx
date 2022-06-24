import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/jhonnyquilichellaxa/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href='https://github.com/Jhonny7521' target='_blank' rel="noreferrer"><FaGithub/></a>
      <a href='https://twitter.com/JhonnyQuiliche' target='_blank' rel="noreferrer"><FaTwitterSquare/></a>
      <a href='/login' ><BiLogIn/></a>
    </div>
  )
}

export default HeaderSocials;