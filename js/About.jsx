import React, { Component } from 'react'

class About extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='container-fluid'>
        <img src='https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/12698253_1166479130037391_513548301625223610_o.jpg' className='profile-picture pull-left'></img>
        <div className='icon-container'>
          <a href='https://www.linkedin.com/in/chriskuh'><img src='http://i.imgur.com/gxhkxFy.png' className='pull-right'></img></a>
          <a href='https://github.com/ckuh'><img src='http://i.imgur.com/TpbdipZ.png?1' className='pull-right'></img></a>
        </div>
        <div className='container-fluid about-container'>
          <h4>About Me</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}

module.exports = About
