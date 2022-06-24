import React from 'react'
import About from '../about/About'
import Contacto from '../contacto/Contacto'
import Experiencia from '../experiencia/Experiencia'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Nav from '../nav/Nav'
import Portfolio from '../portfolio/Portfolio'

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Experiencia />
      <Portfolio />
      <Contacto />
      <Footer />
    </>
  )
}

export default Home