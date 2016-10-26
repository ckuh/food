import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { fetchProjects } from './actions/projectActions'

// components
import ProjectTile from './Tile'
// import Search from './Search'
import About from './About'
// import Contact from './Contact'

import { Well } from 'react-bootstrap'

class Home extends Component {
  componentDidMount () {
    this.props.fetchProjects()
  }

  render () {
    return (
      <div className='container-fluid'>
        <Well bsSize='large'>
          <div className='about-container'>
            <About />
          </div>
          <hr />
          <div className='application-container'>
            {/* <Search /> */}
            <ProjectTile />
          </div>
        </Well>

        {/* <Well bsSize='large'>
          <Contact />
        </Well> */}
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
