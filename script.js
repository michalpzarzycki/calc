//DOM ELEMENTS
const INPUT_1 = document.getElementById("1");
const INPUT_2 = document.getElementById("2");
const CALCULATION_BUTTONS = document.querySelectorAll('input[type="button"]')
// EVENT LISTENERS
CALCULATION_BUTTONS[0].addEventListener('click', handleCalculation )

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

//Science calc 

class ScienceCalculator {
    constructor(...args) {
        this.args = [...args]
    }

       //standard multiply
   //standard divide
   //standard substract
   //standard add

   //sinus
   //cosinus
   //tangens
   //ctg

}

//handle calculation
function handleCalculation(event) {
    event.preventDefault();
    console.log(INPUT_1.value, INPUT_2.value)
}

//handle standard calculation

//handle Science calculation