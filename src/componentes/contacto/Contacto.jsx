import React, { useRef } from 'react';
import './contacto.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contacto = () => {

  const form = useRef();
  // const [msj, setMsj] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bx8vud7', 'template_ibeqh8v', form.current, 'p8zx_JEsadnSjfGBa')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jhonny.jql1210@gmail.com</h5>
            <a href="mailto:jhonny.jql1210@gmail.com" target="_blank" rel="noreferrer">Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Jhonny Quiliche</h5>
            <a href="https://m.me/jhonny.anthony.54/" target="_blank" rel="noreferrer">Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+51 985105406</h5>
            <a href="https://api.whatsapp.com/send?phone=51985105406" target="blank" rel="noreferrer">Enviar mensaje</a>
          </article>
        </div>
        {/* FIN DE OPCIONES DE CONTACTO */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder= 'Ingrese su nombre completo' required />
          <input type="email" name='email' placeholder= 'Ingrese su correo' required />
          <textarea name="message" rows='7' placeholder= 'Ingrese su mensaje' required />
          <button type='submit' className='btn btn-primary' > Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto;