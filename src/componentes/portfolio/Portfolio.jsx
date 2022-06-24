import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img/Safelive1.jpg';
import IMG2 from '../../assets/img/helpingpockets1.jpg';
import IMG3 from '../../assets/img/portfolio3.jpg';
import IMG4 from '../../assets/img/videojuegos.jpg';
// import IMG5 from '../../assets/img/portfolio5.jpg';
// import IMG6 from '../../assets/img/portfolio6.jpg';

//No utilce la imagen en produccion

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'SAFELIVE',
    github: 'https://github.com/Jhonny7521',
    demo: 'https://linkdeproyecto.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'HELPINGPOCKETS',
    github: 'https://github.com/Jhonny7521',
    demo: 'https://linkdeproyecto.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'SALUD-VIDA ETERNA',
    github: 'https://github.com/Jhonny7521',
    demo: 'https://linkdeproyecto.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'VIDEOJUEGOS EDUCATIVOS',
    github: 'https://github.com/Jhonny7521',
    demo: 'https://linkdeproyecto.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi Trabajo Reciente</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Demo en vivo</a>
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