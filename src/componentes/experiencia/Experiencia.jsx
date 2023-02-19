import React from 'react';
import './experiencia.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experiencia = () => {

  return (
    <section id='experience'>
      <h5>Mis Skill</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Lenguajes</h3>
          <div className="experience__content">

            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>PYTHON</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 60%</small>
              </div>
              <div class="menu">
                <div id="py-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>JAVASCRIPT</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 50%</small>
              </div>
              <div class="menu">
                <div id="js-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>JAVA</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 40%</small>
              </div>
              <div class="menu">
                <div id="jav-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Dart</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Bás. 25%</small>
              </div>
              <div class="menu">
                <div id="dart-menu">
                </div>
              </div>
            </div>

            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>*/}
          </div>
        </div> 

        {/* FIN DE LENGUAJES */}

        <div className="experience__backend">
          <h3>Tecnologías</h3>
          <div className="experience__content">

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Django</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 40%</small>
              </div>
              <div class="menu">
                <div id="dj-menu">
                </div>
              </div>
            </div>
            
            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>DRF</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 40%</small>
              </div>
              <div class="menu">
                <div id="drf-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Flask</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 50%</small>
              </div>
              <div class="menu">
                <div id="flk-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Spring Boot</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Bás. 30%</small>
              </div>
              <div class="menu">
                <div id="spr-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Express</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Bás. 25%</small>
              </div>
              <div class="menu">
                <div id="exp-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>HTML / CSS</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 70%</small>
              </div>
              <div class="menu">
                <div id="html-menu">
                </div>
              </div>
            </div>


            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}

          </div>
        </div>
        {/* FIN DE TECNOLOGÍAS */}

        <div className="experience__bd">
          <h3>Bases de Datos</h3>
          <div className="experience__content">

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>MySQL</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 40%</small>
              </div>
              <div class="menu">
                <div id="mysql-menu">
                </div>
              </div>
            </div>
            
            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Oracle PL/SQL</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Bás. 30%</small>
              </div>
              <div class="menu">
                <div id="ora-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Postgre SQL</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Bás. 20%</small>
              </div>
              <div class="menu">
                <div id="pg-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>MongoDB</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Bás. 30%</small>
              </div>
              <div class="menu">
                <div id="mng-menu">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FIN DE BASE DE DATOS */}

        <div className="experience__bd">
          <h3>Herramientas</h3>
          <div className="experience__content">

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>VS Code</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 70%</small>
              </div>
              <div class="menu">
                <div id="vsc-menu">
                </div>
              </div>
            </div>
            
            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Git / Github</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 50%</small>
              </div>
              <div class="menu">
                <div id="git-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Figma</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 40%</small>
              </div>
              <div class="menu">
                <div id="fig-menu">
                </div>
              </div>
            </div>

            <div class="skills">
              <div class="detalles">
                <div class="det-titulo">
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <span>Illustrator</span>
                </div>
                {/* <span>90%</span> */}
                <small className='text-light'>Int. 40%</small>
              </div>
              <div class="menu">
                <div id="ill-menu">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FIN DE HERRAMIENTAS */}

        
      </div>
    </section>

  )
}

export default Experiencia