import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchProjects } from './actions/projectActions'

// components
import ProjectTile from './Tile'

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

  componentDidMount () {
    this.props.fetchProjects('chris')
  }

  render () {
    return (
      <div>
        <h1>{this.state.userInput}</h1>
        <input onChange={this.updateUserInput} />
        <ProjectTile />
      </div>
    )
  }
}

const { object, func } = React.PropTypes

Home.propTypes = {
  projects: object,
  fetchProjects: func
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: fetchProjects(dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home)
