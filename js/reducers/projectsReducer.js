export default function reducer (state = {
  projList: [],
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
      Object.assign(newState, state, {fetching: false, fetched: true, projList: action.payload.data})
      return newState
    }
    default: {
      return state
    }
  }
}
