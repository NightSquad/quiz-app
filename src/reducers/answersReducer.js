const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
  case "setAnswer":
    return { ...state, ...action.obj}

  default:
    return state
  }
}
