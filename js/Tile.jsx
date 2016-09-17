import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProjectTile extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.renderProjects = this.renderProjects.bind(this)
  }

  renderProjects () {
    return this.props.projects.projList.map((project, key) => {
      return (
        <div key={key}>
          <h1>{project.title}</h1>
          <a href={project.url}>Vist Page</a>
          <p>{project.keywords}</p>
          <p>{project.about}</p>
        </div>
      )
    })
  }

  render () {
    const projects = this.renderProjects()

    return (
      <div>
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
