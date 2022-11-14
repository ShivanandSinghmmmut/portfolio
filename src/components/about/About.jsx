import React from 'react'
import './about.css'
import user2 from '../../assets/user2.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
          <div className='about_me'>
            <div className='about_me-image'>
              <img src={user2} alt='about-image'></img>
            </div>
          </div>

          <div className='about_content'>
              <div className='about_cards'>
                <article className='about_card'>
                  <FaAward className='about_icon'></FaAward>
                  <h5>Experience</h5>
                  <small>2+ years working</small>
                </article>

                <article className='about_card'>
                  <FiUsers className='about_icon'></FiUsers>
                  <h5>Experience</h5>
                  <small>2+ years working</small>
                </article>

                <article className='about_card'>
                  <VscFolderLibrary className='about_icon'></VscFolderLibrary>
                  <h5>Experience</h5>
                  <small>2+ years working</small>
                </article>
              </div>

              

              <p>
                    I am a frontend web developer and a competetive coder. 
                    I code in  C++ Programming language. 
                    I am also learning Backend development, 
                    and my college is Madan Mohan Malaviya University Of Technology
              </p>

              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About;
