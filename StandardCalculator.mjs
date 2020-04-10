import ScienceCalculator from './ScienceCalculator.mjs'
//Normal calculator class

export default class StandardCalculator extends ScienceCalculator {
    constructor(...args) {
        super(...args)
    
    }
    // StandardCalc doesnt check the types
    check () {
        return false
    }

}