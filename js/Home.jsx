import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { fetchProjects } from './actions/projectActions'

// components
import ProjectTile from './Tile'
import Search from './Search'
import About from './About'
import { Well } from 'react-bootstrap'

class Home extends Component {
  componentDidMount () {
    this.props.fetchProjects()
  }

  render () {
    return (
      <div className='container-fluid'>
        <Well bsSize='large'>
          <About />
        </Well>

        <Well bsSize='large' className='application-container'>
          <div className='application-title'>
            <h3>Applications</h3>
          </div>
          <Search />
          <ProjectTile />
        </Well>
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
