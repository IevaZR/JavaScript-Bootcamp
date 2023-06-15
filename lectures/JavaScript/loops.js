const myArr = [
    { id: 5, name: "Viola" },
    { id: 25, name: "Kristiana" },
    { id: 2, name: "Simona" },
    { id: 3, name: "Ieva" },
    { id: 30, name: "Simona" },
    { id: 55, name: "Zymante" }
]

for (let i = 0; myArr.length > i; i++) {
    
} 
//this loop will run as many times, as the condition inside the loop says it to run. 
//in this case, while the length of myArr is bigger than the current i which increments after each loop

const obj = {} // we create an empty object
for (let i = 0; myArr.length > i; i++) {
    if (myArr[i].name === "Simona") { //if myArr element (which is object) name is Simona, then add the name to the empty array that we created
        obj.id = myArr[i].id;
        obj.name = myArr[i].name
    }
} 
//console.log(obj)

let foundIndex
for (let i = 0; myArr.length > i; i++) {
    if (myArr[i].name === "Simona") {
        foundIndex = i;
        break; //if we write break, it will stop at finding the first index and will not continue to look for another Simona
    }
} 
//console.log(foundIndex)

const myArr1 = [
    { id: 5, name: "Viola" },
    { id: 25, name: "Kristiana" },
    { id: 2, name: "Simona" },
    { id: 3, name: "Ieva" },
    { id: 30, name: "Simona" },
    { id: 55, name: "Zymante" },
    { id: 40, name: "" },
    { id: 52, name: "" }

]

//forEach

//myArr1.forEach((item) => console.log(item)) //for Each item of the array, console log it. Very similar to for loop

const emptyArray = []
myArr1.forEach((item => {
    if (item.id >= 25) {
        emptyArray.push(item)
    }
}))
// we add to new array all items that id are the same or bigger than 25
//console.log(emptyArray)

const emptyArray1 = []
myArr1.forEach((item => {
    if (item.id >= 25 && item.name.length !== 0) {
        emptyArray1.push(item)
    }
}))
//console.log(emptyArray1)

//falsy values: null, false, 0, undefined, NaN, ""
//truthy values: true, 1, "asf"

const emptyArray2 = []
myArr1.forEach((item => {
    if (item.id >= 25 && item.name) { // item.name the same as item.name.length !== 0, or the same as truthy value
        emptyArray2.push(item)
    }
}))
//console.log(emptyArray2)

const storedValue = myArr.map((item) => { //map method created an array. It is not meant for filtering items, as it will aslo return undefined values. It is only meant for itterating throught the code, without conditions like if (name.length >5)
    return item.name
})
//console.log(storedValue)

const storedValue2 = myArr.map((item) => item.id) //shothand version of the previous code, in one line, without return word
//console.log(storedValue2)

// filter

const filteredValues = myArr1.filter((item) => item.id >=25 && item.name) //returns an array with arrays filtered and added to the new variable
//console.log(filteredValues)

const reducedValues = myArr1.reduce((total, current) => total + current.id, 0)
//first parameter is "previous value" (in the fist loop it is set to initial value 0, in the next loop it is the sum of 0 + array's next item id), second one is curretn value
// total in this case is the sum of previous values
// 0 is the initial number
//console.log(reducedValues) // => in this case the function sums all the ids


const reducedwithStrings = myArr1.reduce((sumOfStrings, item) => {
    return sumOfStrings + item.name + ", "
}, "")
//console.log(reducedwithStrings) // console logs Viola, Kristiana, Simona, Ieva, Simona, Zymante

const myArr2 = [
    { id: 5, name: "Viola" },
    { id: 25, name: "Kristiana" },
    { id: 2, name: "Simona" },
    { id: 3, name: "Ieva" },
    { id: 30, name: "Simona" },
    { id: 55, name: "Zymante" },
    { id: 40, name: "we" },
    { id: 52, name: "er" }
]

//.sort()

const newArr = [24, 55, 53, 12, 1, 6, 77, 4]
const arrMethods = newArr.sort() // sorts array in ascending order (but only in this simple array), but it doesn't sort array of objects like this

const arrMethods1 = myArr2.sort((a, b) => a.id - b.id) // this sorts array of objects by id in ascending order
const arrMethods2 = myArr2.sort((a, b) => b.id - a.id) // this sorts array of objects by id in descending order

const arrMethods3 = newArr.every((item) => item > 1) // checks if every item is bigger than 1. returns true or false

const arrMethods4 = myArr2.some((item) => item.name === "Ieva") //find, if the array includes name Ieva. returns true or false

const arrMethods5 = myArr2.reverse() // reverses the array, so that it starts from the end. it takes the last index and puts it as first etc.

const arrMethods6 = Array.isArray(myArr2) //checks wether this is an array. returns true or false

const value1 = "123"
const arrMethods7 = value1.split(" ")
// converts string into array, with seperator " "

const newArr2 = ["fas", "sas", "cas", "zas"]
const arrMethods8 = newArr2.join("-")
//joins array and makes it to string with seperator 