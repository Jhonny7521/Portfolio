import React from 'react';
// import Header from './componentes/header/Header';
// import Nav from './componentes/nav/Nav';
// import Experiencia from './componentes/experiencia/Experiencia';
// import Servicios from './componentes/servicios/Servicios';
// import Testimonios from './componentes/testimonios/Testimonios';
// import Contacto from './componentes/contacto/Contacto'
// import Footer from './componentes/footer/Footer'
// import Portfolio from './componentes/portfolio/Portfolio';
// import About from './componentes/about/About';
import Login from './componentes/login/Login';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './componentes/home/Home';

const App = () => {
  return (
    <>
      {/* <Header />
      <Nav />
      <About/>
      <Experiencia /> */}
      {/* <Servicios /> */}
      {/* <Portfolio /> */}
      {/* <Testimonios /> */}
      {/* <Contacto />
      <Footer /> */}
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={ () => <Home />}/>
          <Route path='/login' exact render={ () => <Login />}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;