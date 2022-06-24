import React from 'react';
import CV from '../../assets/docs/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className='btn'>Descargar CV</a>
      <a href='#contacto' className='btn btn-primary'>Hablemos</a>
    </div>
  )
}

export default CTA