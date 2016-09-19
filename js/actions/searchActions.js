export function filterProjects (dispatch) {
  return (params) => {
    dispatch({type: 'SET_PROJECTS', payload: params})
  }
}
