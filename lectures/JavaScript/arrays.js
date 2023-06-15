const myArr = ["Viola", "Kristiana", "Simona", "Ieva", "Zymante"]

// const arrayMethodFunc = (array)=> {
//     array.push("Mustafa") //we push a new item to the array. that mutates the actual array
//     return array
// }
// console.log(arrayMethodFunc(myArr)) //returns the mutated array

// const arrayMethodFunc2 = (array)=> {
//     const copyOfArray = [...array] //here we create a copy of the array
//     //... takes the elements of the array and adds them one by one to the new copy
//     copyOfArray.push("Mustafa") //here we push to the new array
//     return copyOfArray //and return the new array
// }
// console.log(arrayMethodFunc2(myArr)) //returns the copy of the array

// const arrayMethodFunc3 = (array1)=> {
//     const copyOfArray = [...array] 
//     copyOfArray.pop() //removes the last value of the array
//     return copyOfArray
// }
// console.log(arrayMethodFunc3(myArr))

// const arrayMethodFunc4 = (array1)=> {
//     const copyOfArray = [...array] 
//     copyOfArray.shift() //takes the first element from the array, removes it and returns it
//     return copyOfArray
// }
// console.log(arrayMethodFunc4(myArr))

// const arrayMethodFunc5 = (array1)=> {
//     const copyOfArray = [...array1] 
//     copyOfArray.unshift() //the same as pop, but add element to the fron of the array
//     return copyOfArray
// }
// console.log(arrayMethodFunc5(myArr))

// const arrayMethodFunc6 = (array1)=> {
//     const copyOfArray = [...array1] 
//     copyOfArray.splice(0,3) //removes elements from the array. the numbers indicate at which index to start and how many to remove
//     return copyOfArray
// }
// console.log(arrayMethodFunc6(myArr))

// const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arrayMethodFunc7 = (array1)=> {
//     const copyOfArray = [...array1] 
//     copyOfArray.splice(copyOfArray.length - 1, 1) //removes the last element from the array, if we don't know the array length
//     return copyOfArray
// }
// console.log(arrayMethodFunc7(newArray))

// const arrayMethodFunc8 = (array1)=> {
//     const copyOfArray = [...array1] 
//     copyOfArray.splice(1, 2, "John", "Hello") //removes elements and replaces them with new ones
//     return copyOfArray
// }
// console.log(arrayMethodFunc8(newArray))

// const arrayMethodFunc9 = (array1)=> {
//     const copyOfArray = [...array1] 
//     copyOfArray.indexOf("5")//to know in which place is the indicated element. returns it's index
//     return copyOfArray
// }
// console.log(arrayMethodFunc9(newArray))

// newArray.includes("John") //searches if the array has this element

const anotherArray = ["Julie", "Julian", "Jack", "Febe", "Tommy"]

const arrayMethodFunc10 = (array1) => {
    const copyOfArray = [...array1]

    return copyOfArray.find((item) => {
        if (item.length === 6) { //if this condition returns true, then method .find will return the element
            return true
        }
    })
}
console.log(arrayMethodFunc10(anotherArray))

const arrayMethodFunc11 = (array1) => {
    const copyOfArray = [...array1]

    return copyOfArray.find((arrayElement) => { //"arrayElement" symbolizes the element of the array. so we can name this whatever we want
        if (arrayElement[0] === "J") { //if this condition returns true, then method .find will return the element
            return true
        }
    })
}
console.log(arrayMethodFunc11(anotherArray))

const anotherNewArray = [
    { id: 5, name: "Viola" },
    { id: 25, name: "Kristiana" },
    { id: 2, name: "Simona" },
    { id: 3, name: "Ieva" },
    { id: 30, name: "Simona" },
]

const arrayMethodFunc12 = (array1) => {
    const copyOfArray = [...array1]

    return copyOfArray.find((arrayElement) => {
        if (arrayElement.id > 10 && arrayElement.name[0] === "S") { //finds Simona with id 30
            return true
        }
    })
}
console.log(arrayMethodFunc12(anotherNewArray))

const arrayMethodFunc15 = (array1) => {
    const foundElementIndex = array1.findIndex((arrayElement) => {
        if (arrayElement.id > 10 && arrayElement.name[0] === "S") { //finds Simona with id 30
            return true
        }
    })
}
console.log(arrayMethodFunc15(anotherNewArray))