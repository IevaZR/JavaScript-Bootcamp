const users = [
    {id: 1, name: "John", age: 25},
    {id: 15, name: "Jim", age: 50},
    {id: 34, name: "Julie", age: 32},
    {id: 76, name: "Becky", age: 15},
    {id: 45, name: "Jonathan", age: 53},
    {id: 12, name: "Frederick", age: 87},
]

const newArr = [24, 55, 53, 12, 1, 6, 77, 4]
const newArr2 = ["fas", "sas", "cas", "zas", "aas", "bsf"]

//.map
const mapMethod = users.map((item) => item.age + 10)
console.log(mapMethod) // returns [ 35, 60, 42, 25, 63, 97 ]

const mapMethodWithForEach = []
users.forEach((item) => {
    mapMethodWithForEach.push(item.age + 10)
})
console.log(mapMethodWithForEach) // returns [ 35, 60, 42, 25, 63, 97 ]

//teacher solution for .map with for loop
//map goes through every item in array and extracts properties that we need
const customMapFunc = (array, callback) => {
    const answer = []
    for (i=0; i < array.length; i++) {
        answer.push(callback(array[i], i, array))
    }
    return answer
}
console.log(customMapFunc(users, (item)=> item.id))

//.filter
const filterMethod = users.filter((item) => item.age >= 18)
console.log(filterMethod) //returns a new array of objects, without the person, who is younger than 18 years old

const filterMethodWithForEach = []
users.forEach((item) => {
    if (item.age >=18) {
        filterMethodWithForEach.push(item)
    }
})
console.log(filterMethodWithForEach) //returns a new array of objects, without the person, who is younger than 18 years old

//teacher solution for .filter with .forEAch
const customFilterFunc = (array, callback) => {
    const answer = []
    array.forEach((item, index) => {
        if (callback(item, index, array)) {
            answer.push(item)
        }
    })
}
console.log(customFilterFunc(users, (item) => item.id >=40))

//.every
const everyMethod = users.every((item) => item.name[0] === "J")
console.log(everyMethod) // returns false, as every name does not start with "J"

let everyMethodWithForEach = true
users.forEach((item) =>{
    if(item.name[0] === "J") {
        everyMethodWithForEach = true
    } else {
        everyMethodWithForEach = false
    }
    return everyMethodWithForEach
})
console.log(everyMethodWithForEach) // returns false, as every name does not start with "J"

//teacher solution
const customEveryFunc = (array, callback) => {
    for(i=0; i < array.length; i++){
        if(!callback(array[i], i, array)) {
            return false
        }
    }
    return true
}
console.log(customEveryFunc(users, (item) => item.name.length >2))

//.some
const someMethod = users.some((item) => item.name.length > 10)
console.log(someMethod) // returns false, as there are no names longer than 10 characters

let someMethodWithForLoop = true
for(let i=0; i < users.length; i++) {
    if(users[i].name.length > 10) {
        someMethodWithForLoop = true
    } else {
        someMethodWithForLoop = false
    }
}
console.log(someMethodWithForLoop) // returns false, as there are no names longer than 10 characters

//teacher solution for .some

const customSomeFunc = (array, callback) => {
    for(i=0; i < array.length; i++){
        if(!callback(array[i], i, array)) {
            return true
        }
    }
    return false
}
console.log(customSomeFunc(users, (item) => item.name.charAt(0) === "J"))

//Bonus task => .reduce
const reduceMethod = users.reduce((acc, current) => acc + current.age, 0)
console.log(reduceMethod) //returns the sum of all users' ages

let sumOfAges = 0;
const reduceMethodWithForEach = users.forEach((user) => {
    sumOfAges = sumOfAges + user.age
})
console.log(sumOfAges) //returns the sum of all users' ages

//teacher solution for .reduce

const customReduceFunc = (array, callback, initialValue) => {
    let acc = array[0];
    for(i=realInitialValue; array.length > i; i++) {
        acc = callback(acc, array[i], i, array)
    }
    return acc
}
console.log(customReduceFunc(newArr, (prev, curr) => prev + curr))
