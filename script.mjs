import Calculator from './Calculator.mjs'
import ScienceCalculator from './ScienceCalculator.mjs'
import StandardCalculator from './StandardCalculator.mjs'

//DOM ELEMENTS
const INPUT_1 = document.getElementById("1");
const INPUT_2 = document.getElementById("2");
const CALCULATION_BUTTONS = document.querySelectorAll('input[type="button"]')

// let newCalc = new Calculator(5,6)

function handleCalculation(event) {
    event.preventDefault();
    let value_1 = INPUT_1.value
    let value_2 = INPUT_2.value
    console.log(value_1, value_2)

}
//handle standard calculation
function handleStandardCalculation(event) {
    event.preventDefault();
    let value_1 = INPUT_1.value
    let value_2 = INPUT_2.value
    let newCalc = new StandardCalculator(value_1, value_2)
    let added = newCalc.add()
    console.log(added)

}
//handle Science calculation
function handleScienceCalculation(event) {
    event.preventDefault();
    let value_1 = INPUT_1.value
    let value_2 = INPUT_2.value
    let newCalc = new ScienceCalculator(value_1, value_2)
    let added = newCalc.add()
    console.log("SCIENCE", added)

}
// EVENT LISTENERS
CALCULATION_BUTTONS[0].addEventListener('click', handleCalculation)
CALCULATION_BUTTONS[1].addEventListener('click', handleStandardCalculation)
CALCULATION_BUTTONS[2].addEventListener('click', handleScienceCalculation)