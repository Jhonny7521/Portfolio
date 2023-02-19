import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img/proy1.jpg';
import IMG2 from '../../assets/img/proy2.jpg';
import IMG3 from '../../assets/img/proy3.jpg';
import IMG4 from '../../assets/img/proy4.jpg';
import IMG5 from '../../assets/img/proy5.jpg';
import IMG6 from '../../assets/img/proy6.jpg';

import { BsGithub, BsYoutube } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";


//No utilce la imagen en produccion
const JS = 'https://i.ibb.co/cbmdzyb/javascript-logo.png';
const PYTHON = 'https://i.ibb.co/v4nLhq2/python-logo.png';
const REACT = 'https://i.ibb.co/DRNWpRh/react-logo.png';
const FLASK = 'https://i.ibb.co/1JDT9JX/flask-logo.png';
const DJANGO = 'https://i.ibb.co/LPFs9yL/django-logo.png';
const BOOTSTRAP = 'https://i.ibb.co/MGKCJGj/bootstrap-logo.png';
const NODEJS = 'https://i.ibb.co/7t6MWHy/node-logo.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'KANBAN',
    description: 'Sistema de Inventario para almacenes, implementado con JWT, mensajeria con Twilio, Websockets (Pusher) y persistencia de datos en Supabase.',
    github: 'https://github.com/Geffrerson7/Proyecto-Unidad-8-Back',
    video: 'https://www.youtube.com/watch?v=46EETAxA3tA',
    demo: 'https://proyecto-unidad-8-front-kjk6xch12-geffrerson7.vercel.app/',
    technologies: [JS, NODEJS]
  },
  {
    id: 2,
    image: IMG2,
    title: 'MUSICAPP API',
    description: 'MUSICAPP es una API que sigue los principios REST. Una vez autenticado, podrás registrar artistas, canciones, álbumes y crear playlists de canciones.',
    github: 'https://github.com/Jhonny7521/MUSICAPP_API',
    video: '',
    demo: '',
    technologies: [DJANGO, PYTHON]
  },
  {
    id: 3,
    image: IMG3,
    title: 'PORTFOLIO V2',
    description: 'PORTFOLIO V2 en la versión actual permite registrar varios usuarios y agregar sus proyectos. Unicamente cuando un usuario esta logueado.',
    github: 'https://github.com/Jhonny7521/Portfolio-v2',
    video: '',
    demo: '',
    technologies: [DJANGO, PYTHON]
  },  
  {
    id: 4,
    image: IMG4,
    title: 'POKEDEX APP',
    description: 'Pokedex en línea: Consumiendo API POKEAPI, autenticación y funcionalidad de agregar Pokémon favoritos con Supabase.',
    github: 'https://github.com/Jhonny7521/Pokedex-Authentication-Suprabase',
    video: '',
    demo: 'https://wonderful-longma-5d3b8e.netlify.app/',
    technologies: [REACT, JS, NODEJS]
  },
  {
    id: 5,
    image: IMG5,
    title: 'JUEGA Y APRENDE',
    description: 'Juegos educativos con operaciones matematicas para niños. Desarrollado con Adobe Animate y Javascript.',
    github: 'https://github.com/Jhonny7521/Juega-y-Aprende',
    video: '',
    demo: 'https://juegayaprende.netlify.app/',
    technologies: [JS, NODEJS, BOOTSTRAP]
  },
  {
    id: 6,
    image: IMG6,
    title: 'PSTORE',
    description: 'Tienda online, que permite realizar busquedas de productos ya sea por categorias o texto ingresado.',
    github: 'https://github.com/Jhonny7521/TiendaOnline-BackEnd',
    video: '',
    demo: 'https://tienda-online-bsale-frontend.netlify.app',
    technologies: [JS, FLASK, PYTHON]
  },
  
]

function getVideoButton(video) {
  if (video && video !== "") {
    return <a href={video} className="btn btn-primary" target='_blank' rel='noreferrer'><BsYoutube/></a>;
  }
  return null;
}

function getDemoButton(demo) {
  if (demo && demo !== "") {
    return <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'><CgWebsite/></a>
  }
  return <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer' style={{ pointerEvents: "none" }}><CgWebsite/></a>
}

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>Mi Trabajo Reciente</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, description, github, video, demo, technologies}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='conatiner__technologies'>
                  {technologies.map((tech) => {
                    return (
                      <img className='img__tech' src={tech} alt='proyecto'/>
                    )
                  })}
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank' rel='noreferrer'><BsGithub/></a>
                  {getVideoButton(video)}
                  {/* <a href={video} className="btn btn-primary" target='_blank' rel='noreferrer'><BsYoutube/></a> */}
                  {getDemoButton(demo)}
                  {/* <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'><CgWebsite/></a> */}
                </div>
              </article>
            )
          })
        }        
      </div>
    </section>
  )
}

export default Portfolio;