import Calculator from './Calculator.mjs'
import ScienceCalculator from './ScienceCalculator.mjs'
import StandardCalculator from './StandardCalculator.mjs'

//DOM ELEMENTS
const INPUT_1 = document.getElementById("1");
const INPUT_2 = document.getElementById("2");
const CALCULATION_BUTTONS = document.querySelectorAll('input[type="button"]')

let Science  = new ScienceCalculator(5,5,5,6,6, "hahah")
let scienceResult = Science.check()
console.log(scienceResult)
let standard = new StandardCalculator(5,5,5,6,6, "hahah")
standard.check()
let standardResult = standard.scienceAdd()
console.log(standardResult)


// let newCalc = new Calculator(5,6)

function handleCalculation(event) {
    event.preventDefault();
    console.log("WORK")
}
//handle standard calculation

//handle Science calculation

// EVENT LISTENERS
CALCULATION_BUTTONS[0].addEventListener('click', handleCalculation)