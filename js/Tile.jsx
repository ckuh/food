import React, { Component } from 'react'
import { connect } from 'react-redux'

// component
import { Button } from 'react-bootstrap'

class ProjectTile extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.renderProjects = this.renderProjects.bind(this)
  }

  renderProjects () {
    return this.props.projects.filterProjList.map((project, key) => {
      return project.deploy ? (
        <div className='tile' key={key} >
          <h2>{project.title}</h2>
          <img src={project.img} />
          <div className='tile-content-container'>
            <p><i>{project.keywords}</i></p>
            <p>{project.about}</p>
            <Button href={project.url} bsClass='btn tile-button'>VIEW SITE</Button>
          </div>
        </div>
      ) : (
        <div className='tile' key={key} >
          <h2>{project.title}</h2>
          <img src={project.img} />
          <div className='tile-content-container'>
            <p>{project.keywords}</p>
            <p>{project.about}</p>
            <Button href={project.url} bsClass='btn tile-button'>VIEW GITHUB</Button>
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
