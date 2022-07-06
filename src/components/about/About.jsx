import React from 'react'
import "./about.css"
import Me from '../../assets/undraw_hello_re_3evm.svg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_img">
            <img src={Me} alt="About Me Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__card__icon"/>
              <h5>Experience</h5>
              <small>1 Year working</small>
            </article>

            <article className='about__card'>
              <FiUsers className="about__card__icon"/>
              <h5>Clients</h5>
              <small>0 Crying rn</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className="about__card__icon"/>
              <h5>Projects</h5>
              <small>20+ Completed 5+ In development</small>
            </article>
          </div>

            <p>
            Hello there, my name is Rajinder S Ropra. I am a year nine student currently studying at Tudor Grange Academy. I am a code-orientated programmer with a passion for Python, CSS, HTML and C#. In the past, I have worked on games within a team and myself. I have also worked on a python project with 19 other python programmers racking up 468 commits - that project lasted for six months. This can show my resilience and hard-working nature.
            </p>

        </div>
      </div>
    </section>
  )
}

export default About