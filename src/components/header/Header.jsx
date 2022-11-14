import React from 'react'
import './header.css'
import user1 from '../../assets/user1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Shivanand Singh</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <div className='cta'>
          <a href='#cv' className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        <HeaderSocials></HeaderSocials>
        <div className='user'>
          <img src={user1} alt="user-img" className='img'></img>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header;
