var a;
let b;
const c = 1;
a = 10
b = 20
//c = 30  => reasigning value to const variable will not work
const answer = a + b + c
//console.log(answer)
//this will not work, as we are reassigning a value to constant variable c, which does not work


let firstNumber = 10
firstNumber = 25 //this is reasigning
//let firstNumber = 25 => this is redeclaring and will not work
const secondNumber = 15

// We can comment something out by pressing CTRL + /

let answer2 = firstNumber % secondNumber //to know how many times the second number is within the first number

firstNumber++ //this is the same as this
firstNumber = firstNumber + 1


const myName1 = "'John'"
const myName2 = 'Tom'
const myName = `${myName1} ${myName2}`//turbo log by pressing Shift+Alt+L

//console.log("🚀 ~ file: script.js:29 ~ myName:", myName)


//by default we should declare const variables

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mixOfTypes = [true, 'mustafa123', 100, []] // array => Object


let someNumber = null;

function myFirstFunction() {
    //object with key value pairs. these are hardcoded
    const personDetail = {
        name: "John Test",
        age: 20,
        gender: "male",
        isStudent: true
    } // Object
    //console.log("🚀 ~ file: script.js:44 ~ personDetail:", personDetail)
} 

myFirstFunction()

function mySecondFunction(personName, personAge, personGender, personIsStudent, personGrades) {
    //object with key value pairs. these are hardcoded

    const personDetail = {
        name: personName,
        age: personAge,
        gender: personGender,
        isStudent: personIsStudent,
        grades: personGrades
    } // Object
    //console.log("🚀 ~ file: script.js:44 ~ personDetail:", personDetail)
    return personDetail
} 

//console.log(mySecondFunction("John", 20, "male", true, [95, 96, 40, 75, 53]))


//-----------------------------------------------------------------------

function sliceMethods(string) {
    return string.slice(0, 4) // slicing the string into substrings. We are getting the fisrt 4 letters of the string  
}
//console.log(sliceMethods("John Stamos"))

function splitMethods(string) {
    return string.split(" ") // the space is the seperator, which creates new strings
}
//console.log(splitMethods("John Stamos"))

function concatMethods(string) {
    return string.concat(" <- This is a new name ") //will concatinate strings
}
//console.log(concatMethods("John Stamos"))


function personHasALongNAme (string) {
    if (string.length > 8) {
        return true
    } //else { we try not to use the else statement, as if the fisrt block 
        //return false
    //}
    return false //this line is written without the else
}

//console.log(personHasALongNAme("mustafa"))

//arrow function =>
const numberMethods = (number) => {
    return Number.isInteger(number)
}
//console.log(numberMethods(10))

const numberMethods2 = (number) => {
    if(typeof number === "string") {
        return Number.isInteger(parseInt(number))
    }
    return Number.isInteger(number)
}
//console.log(numberMethods2("/"))

const numberMethods3 = (number1, number2) => {
    return number1 > number2
}
console.log(numberMethods3(3, 2))

