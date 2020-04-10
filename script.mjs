import Calculator from './Calculator.mjs'

//DOM ELEMENTS
const INPUT_1 = document.getElementById("1");
const INPUT_2 = document.getElementById("2");
const CALCULATION_BUTTONS = document.querySelectorAll('input[type="button"]')





let newCalc = new Calculator(5,6)
console.log(newCalc)


function handleCalculation(event) {
    event.preventDefault();
    console.log("WORK")
}
//handle standard calculation

//handle Science calculation

// EVENT LISTENERS
CALCULATION_BUTTONS[0].addEventListener('click', handleCalculation)