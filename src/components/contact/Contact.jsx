import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import  { useRef } from 'react';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ixmkn33', 'template_woot20l', form.current, 'dwgZw8LZoQ63Os0tE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
            <article className='contact_option'>
              <MdOutlineEmail className='contact_option_icon'/>
              <h4>Email</h4>
              <h5>shivasingh21793@gmail.com</h5>
              <a href='mailto:shivasingh21793@gmail.com' target='_blank'>Send a Message</a>
            </article>

            <article className='contact_option'>
              <RiMessengerLine className='contact_option_icon'/>
              <h4>Email</h4>
              <h5>shivasingh21793@gmail.com</h5>
              <a href='shivasingh21793@gmail.com' target='_blank'>Send a Message</a>
            </article>

            <article className='contact_option'>
              <BsWhatsapp className='contact_option_icon'/>
              <h4>Whatsapp</h4>
              <h5>9696238943</h5>
              <a href='https://api.whatsapp.com/send?phone+9696238943' target='_blank'>Send a Message</a>
            </article>
        </div>
        {/* end of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email'></input>
          <textarea name='message' rows='7' placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
