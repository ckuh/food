import React from 'react'

// components
import { Button } from 'react-bootstrap'

const About = () => (
  <div className='container-fluid about-container'>
    <img src='https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/12698253_1166479130037391_513548301625223610_o.jpg' className='profile-picture' />

    <div className='container-fluid'>
      <h3>Hey there,</h3>
      <h1>I'm <span>Chris Kuh</span></h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div>
        <Button href='https://github.com/ckuh' bsClass='btn about-button'>Github</Button>
        <Button href='https://www.linkedin.com/in/chriskuh' bsClass='btn about-button'>Linkedin</Button>
      </div>
    </div>
  </div>
)

module.exports = About
