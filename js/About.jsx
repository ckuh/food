import React from 'react'

// components
import { Button } from 'react-bootstrap'

const About = () => (
  <div className='container-fluid about-content-container'>
    <img src='https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/12698253_1166479130037391_513548301625223610_o.jpg' className='profile-picture' />

    <div className='container-fluid'>
      <h3>Hey there,</h3>
      <h1>I'm <span>Chris Kuh</span></h1>
      <p>
        I Previously programmed microcontrollers in C. While doing this I learned that I had a passion for programming. Although programming microcontrollers was exciting, I wanted to expand my tool set and build applications that anyone could use. Therefor, I partook in an accelerated learning program for JavaScript. During this program I honed my skills in the MEAN stack and now more then confident in building any application.
      </p>
      <div>
        <Button href='https://github.com/ckuh' bsClass='btn about-button'>Github</Button>
        <Button href='https://www.linkedin.com/in/chriskuh' bsClass='btn about-button'>Linkedin</Button>
      </div>
    </div>
  </div>
)

module.exports = About
