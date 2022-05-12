import { store } from "../reducers";

export default (answers) => {
    let results = store.getState().apiGetResults
    let score = 0;
    let answersResults = []
    for (let i=0; i<results.length; i++) {
        if (answers[i] === atob(results[i].correct_answer)) {
            score++
            answersResults.push(true)
        } else answersResults.push(false)
    }
    return [score, answersResults]
}