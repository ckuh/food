import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import { Button } from 'react-bootstrap'

class ProjectTile extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.renderProjects = this.renderProjects.bind(this)
  }

  renderProjects () {
    return this.props.projects.filterProjList.map((project, key) => {
      let button

      if (project.deploy) {
        button = (
          <Button href={project.url} bsClass='btn about-button'>View Page</Button>
        )
      } else {
        button = (
          <Button href={project.url} bsClass='btn about-button'>View on GitHub</Button>
        )
      }

      return (
        <div className='col-md-6' key={key}>
          <h1>{project.title}</h1>
          <p>{project.keywords}</p>
          <p>{project.about}</p>
          {button}
        </div>
      )
    })
  }

  render () {
    const projects = this.renderProjects()

    return (
      <div className='container-fluid tile-container'>
        <div className='row'>
          {projects}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const { object } = React.PropTypes

ProjectTile.propTypes = {
  projects: object
}

module.exports = connect(mapStateToProps)(ProjectTile)
