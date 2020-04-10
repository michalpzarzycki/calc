import ScienceCalculator from './ScienceCalculator.mjs'

//DOM ELEMENTS
const INPUT_1 = document.getElementById("1");
const INPUT_2 = document.getElementById("2");
const CALCULATION_BUTTONS = document.querySelectorAll('input[type="button"]')


console.log("HEJ")




//Normal calculator class

class StandardCalculator extends ScienceCalculator {
    constructor(...args) {
        this.args = [...args]
    }

   //standard multiply
   //standard divide
   //standard substract
   //standard add
}

// Calculator
class Calculator extends StandardCalculator{
    constructor(...args) {
        this.args = [...args]
    }


    //check method
    //add
    //substract
    //multiply
    //add
}

function handleCalculation(event) {
    event.preventDefault();
    console.log("WORK")
}
//handle standard calculation

//handle Science calculation

// EVENT LISTENERS
CALCULATION_BUTTONS[0].addEventListener('click', handleCalculation)