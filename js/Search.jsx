import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { filterProjects } from './actions/searchActions'

class Search extends Component {
  constructor (props) {
    super(props)

    this.filterProjects = this.filterProjects.bind(this)
  }

  filterProjects (event) {
    var filter = this.props.projects.projList.filter((project) => {
      return project.title.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0
    })
    this.props.filterProjects(filter)
  }

  render () {
    return (
      <div className='search-container'>
        <input onChange={this.filterProjects} placeholder='search' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterProjects: filterProjects(dispatch)
  }
}

const { object, func } = React.PropTypes

Search.propTypes = {
  projects: object,
  filterProjects: func
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Search)
