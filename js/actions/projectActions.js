import axios from 'axios'

export function fetchProjects (dispatch) {
  return (params) => {
    axios.get('/projects')
      .then((response) => {
        console.log('response: ', response)
        dispatch({type: 'FETCH_PROJECTS_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        console.log('error: ', err)
        dispatch({type: 'FETCH_PROJECTS_REJECTED', payload: err})
      })
  }
}
