import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
       <a href='https://linkdin.com' target='__blank'><BsLinkedin></BsLinkedin></a>
       <a href='https://github.com' target='__blank'><FaGithub></FaGithub></a>
       <a href='https://facebook.com' target='__blank'><BsFacebook></BsFacebook></a>
    </div>
  )
}

export default HeaderSocials
