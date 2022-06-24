import React from 'react';
import './testimonios.css';
import AVTR1 from '../../assets/img/avatar1.jpg';
import AVTR2 from '../../assets/img/avatar2.jpg';
import AVTR3 from '../../assets/img/avatar3.jpg';
import AVTR4 from '../../assets/img/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    img: AVTR1,
    name: 'Nombre1',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae amet nihil voluptatem, nam cumque quam veniam rem quo, corrupti minus iure in quasi quos tempora sed ipsam cupiditate, eos deserunt.'
  },
  {
    img: AVTR2,
    name: 'Nombre2',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae amet nihil voluptatem, nam cumque quam veniam rem quo, corrupti minus iure in quasi quos tempora sed ipsam cupiditate, eos deserunt.'
  },
  {
    img: AVTR3,
    name: 'Nombre3',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae amet nihil voluptatem, nam cumque quam veniam rem quo, corrupti minus iure in quasi quos tempora sed ipsam cupiditate, eos deserunt.'
  },
  {
    img: AVTR4,
    name: 'Nombre4',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae amet nihil voluptatem, nam cumque quam veniam rem quo, corrupti minus iure in quasi quos tempora sed ipsam cupiditate, eos deserunt.'
  },
]

const Testimonios = () => {
  return (
    <section id='testimonials'>
      <h5>Revisión de los clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, img, name, comment}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={img} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{comment}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonios