import React from 'react';
import './about.css';
import ME from '../../assets/img/yo2.jpg';

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
          {/* <div className="about__cards">
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
          </div> */}

          <p>
          Soy Jhonny Quiliche, bach. en Ing. Electrónica apasionado y vocacional por la tecnología. Siempre en busqueda de nuevos desafíos y me caracterizo por ser una persona autodidacta. Soy muy creativo y siempre me gusta aportar propuestas que ayuden a la empresa o a mis colaboradores a ser más eficientes en el trabajo. Con 1 ½ año de experiencia en el desarrollo de aplicaciones de escritorio y actualmente me encuentro enfocado en el desarrollo web backend, utilizando lenguajes como Python y Javascript. Si hay algo que resaltar sobre mi es que trabajo de manera directa y creativa, involucrándome al 100% en todo lo que hago para conseguir siempre el mejor resultado.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About;