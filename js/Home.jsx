import React, { Component } from 'react'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userInput: 'Hello world'
    }

    this.updateUserInput = this.updateUserInput.bind(this)
  }

  updateUserInput (event) {
    this.setState({userInput: event.target.value})
  }

  render () {
    return (
      <div>
        <h1>{this.state.userInput}</h1>
        <input onChange={this.updateUserInput} />
      </div>
    )
  }
}

module.exports = Home
