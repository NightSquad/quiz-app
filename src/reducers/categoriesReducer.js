export default (state = [], action) => {
  switch (action.type) {

  case "setCategories":
    return action.newFormats

  default:
    return state
  }
}
