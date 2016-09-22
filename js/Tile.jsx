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
    let storage = []
    let tple = []

    this.props.projects.filterProjList.forEach((project, key) => {
      let button

      if (project.deploy) {
        button = (
          <Button href={project.url} bsClass='btn tile-button'>View Page</Button>
        )
      } else {
        button = (
          <Button href={project.url} bsClass='btn tile-button'>View on GitHub</Button>
        )
      }

      tple.push((
        <div className='' key={key}>
          <div className='tile-touple-content-container'>
            <h1>{project.title}</h1>
            <p>{project.keywords}</p>
            <p>{project.about}</p>
          </div>
          {button}
        </div>
      ))

      if ((key + 1) % 2 === 0) {
        storage.push((
          <div className='tile-touple-container'>
            {tple}
          </div>
        ))
        tple = []
      }
    })

    return storage
  }

  render () {
    const projects = this.renderProjects()

    return (
      <div className='container-fluid tile-container'>
        <div className=''>
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
