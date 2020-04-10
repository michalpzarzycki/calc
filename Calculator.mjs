import StandardCalculator from './StandardCalculator.mjs'
// Calculator
export default class Calculator extends StandardCalculator{
    constructor(...args) {
        this.args = [...args]
    }

    add() {
        console.log("HEJ")
        }
    //check method
    //add
    //substract
    //multiply
    //add
}