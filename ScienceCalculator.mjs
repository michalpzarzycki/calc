//Science Calclulator does care about data types, so he wont calculate if types ain't validate

export default class ScienceCalculator {
    constructor(...args) {
        this.args = [...args]
    }
    
    check() {
        //First, I created an empty array where I am gonna put all fields of numbers which ain't contain a number
        let notNumbersFields = []

        //Loop on arguments from constructor
        for(let i=0; i<this.args.length; i++) {
            //Check if an item is NaN, boolean or null
            if(isNaN(this.args[i]) || this.args[i] === true || this.args[i] === false || this.args[i] === null) {
                //if true, add that to notNumberFields array
                notNumbersFields = [...notNumbersFields, i+1];
            }   
        }

        console.log(notNumbersFields)
        //Created variable which contain full claim about errors in validation
        let finalnotOKStatement = `Fields ${notNumbersFields.toString().split(",")} are not a number`

        console.log(`${notNumbersFields.length === 0 ? "Everything's okay!": finalnotOKStatement}`)

        //I wanna to check() method return if args are valid or not so: 

        if(notNumbersFields.length === 0) {
            return true
        } else {
            console.error("Not all elements are numbers. Check the input values");
            return false
        }
    }


    add() {
        if(this.check()) {
            let numbers = this.args.map(x => new Number(x))
            return numbers.reduce((item, acc) => item + acc)
        } else {
            return [...this.args].reduce((item, acc) => item + acc)

        }
    }
    substract() {
        console.log("Science Add")
        if(this.check()) {
            return [...this.args].reduce((item, acc) => item - acc)
        }
    }
    multiply() {
        console.log("Science Add")
        if(this.check()) {
            return [...this.args].reduce((item, acc) => item * acc)
        }
    }
    divide() {
        console.log("Science Add")
        if(this.check()) {
            return [...this.args].reduce((item, acc) => item / acc)
        }
    }

   //sinus
   //cosinus
   //tangens
   //ctg

}