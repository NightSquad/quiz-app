const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {

  case "setQuestions":
    return action.data

  default:
    return state
  }
}
