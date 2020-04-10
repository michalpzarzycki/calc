import ScienceCalculator from './ScienceCalculator.mjs'
//Normal calculator is JS calculator witch not care about the types 5+4=54

export default class StandardCalculator extends ScienceCalculator {
    constructor(...args) {
        super(...args)
        this.args = args
    
    }
    
    add () {
        return [...this.args].reduce((item, acc) => item+acc)
    }

}