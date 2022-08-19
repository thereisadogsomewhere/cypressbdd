import ResultPageElements from "../pageelements/ResultPageElements"

export default class ResultPageActions {
    
    constructor() {
        globalThis.resultPageElement = new ResultPageElements()
    }

    firstResultTitle() {
        return resultPageElement.firstResultTitle()
    }
}