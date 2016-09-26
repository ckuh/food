import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProjectTile extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.renderProjects = this.renderProjects.bind(this)
  }

  renderProjects () {
    return this.props.projects.filterProjList.map((project, key) => {
      return (
        <div className='tile' key={key} >
          <h1>{project.title}</h1>
          <a href={project.url}>
            <img src={project.img} />
          </a>
          <div className='tile-content-container'>
            <p>{project.keywords}</p>
            <p>{project.about}</p>
          </div>
        </div>
      )
    })
  }

  render () {
    const projects = this.renderProjects()

    return (
      <div className='container-fluid tile-container'>
        {projects}
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
