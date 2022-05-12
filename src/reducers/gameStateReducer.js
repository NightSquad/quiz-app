export default (state = false, { type, payload }) => {
    switch (type) {

    case "STARTGAME":
        return state = true

    case "FINISHGAME":
        return state = false

    default:
        return state
    }
}
