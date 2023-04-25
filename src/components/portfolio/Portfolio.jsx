import React from 'react'
import './portfolio.css'
import web1 from '../../assets/web1.jpg'
import web2 from '../../assets/web2.jpg'
import web7 from '../../assets/web7.jpg'
import web4 from '../../assets/web4.jpg'
import web5 from '../../assets/web5.jpg'
import web8 from '../../assets/web8.png'
import web9 from '../../assets/web9.png'
import web10 from '../../assets/web10.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web8} alt='web8'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/ssmj.github.io' className='btn' target='_blank'>Github</a>
            <a href='https://ssm-tau.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web9} alt='web9'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/myTrip.com' className='btn' target='_blank'>Github</a>
            <a href='https://my-trip-com.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web10} alt='web10'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/myHome' className='btn' target='_blank'>Github</a>
            <a href='https://my-home-henna.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>


         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web2} alt='web2'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/myUniversity' className='btn' target='_blank'>Github</a>
            <a href='https://shivanandsinghmmmut.github.io/myUniversity/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         

         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web5} alt='web2'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/-securityZone' className='btn' target='_blank'>Github</a>
            <a href='https://security-zone.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web1} alt='web2'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/xypo' className='btn' target='_blank'>Github</a>
            <a href='https://shivanandsinghmmmut.github.io/xypo/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         

         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web7} alt='web7'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/landingPage1' className='btn' target='_blank'>Github</a>
            <a href='https://shivanandsinghmmmut.github.io/landingPage1/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>

         <article className='portfolio_item'>
            <div className='portfolio_item_image'>
              <img src={web4} alt='web2'></img>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio_item_cta'>
            <a href='https://github.com/ShivanandSinghmmmut/lampWebsite' className='btn' target='_blank'>Github</a>
            <a href='https://shivanandsinghmmmut.github.io/lampWebsite/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         </article>
      </div>
    </section>
  )
}

export default Portfolio
