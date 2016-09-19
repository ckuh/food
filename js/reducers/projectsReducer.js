export default function reducer (state = {
  projList: [],
  filterProjList: [],
  fetching: false,
  fetched: false,
  error: ''
}, action) {
  switch (action.type) {
    case 'FETCH_PROJECTS': {
      const newState = {}
      Object.assign(newState, state, {fetching: true})
      return newState
    }
    case 'FETCH_PROJECTS_REJECTED': {
      const newState = {}
      Object.assign(newState, state, {fetching: false, error: action.payload})
      return newState
    }
    case 'FETCH_PROJECTS_FULFILLED': {
      const newState = {}
      Object.assign(newState, state, {fetching: false, fetched: true, projList: action.payload.data, filterProjList: action.payload.data})
      return newState
    }
    case 'SET_PROJECTS': {
      const newState = {}
      Object.assign(newState, state, {filterProjList: action.payload})
      return newState
    }
    default: {
      return state
    }
  }
}
