export default (state = false, { type, payload }) => {
  switch (type) {
    case "CHANGE":
        return !state
  default:
    return state
  }
}