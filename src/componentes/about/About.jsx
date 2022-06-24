import React from 'react';
import './about.css';
import ME from '../../assets/img/yo2.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

function About() {
  return (
    <section id='about'>
      <h5>Debes saber</h5>
      <h2>Sobre Mi</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre mi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1+<br/> Año trabajando</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Empresas</h5>
              <small>1+ <br/>JAC E&C <br/>Mathland-Chile</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projectos</h5>
              <small>3+ <br/> Completados</small>
            </article>
          </div>

          <p>
          Soy bachiller en ingeniería Electrónica por pasión y vocación. Pertenezco a un grupo de desarrollo e innovación con el que he obtenido el primer lugar en un concurso nacional de innovación social. Por ello, me encuentro formándome en el desarrollo de aplicaciones web y móviles de manera autodidacta. Si hay algo que resaltar sobre mi es que trabajo de manera directa y creativa, involucrándome al 100% en todo lo que hago para conseguir siempre el mejor resultado.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About;