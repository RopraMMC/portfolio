import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/lmea.svg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="text">
          <h5>Hello I'm</h5>
          <h1>Rajinder S Ropra</h1>
          <h5 className="text-light">Student</h5>
        </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" id='img__me'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header