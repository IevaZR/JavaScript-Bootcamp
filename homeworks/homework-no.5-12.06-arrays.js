const users = [
    {id: 1, name: "John", age: 25},
    {id: 15, name: "Jim", age: 50},
    {id: 34, name: "Julie", age: 32},
    {id: 76, name: "Becky", age: 15},
    {id: 45, name: "Jonathan", age: 53},
    {id: 12, name: "Frederick", age: 87},
]

//.map
const mapMethod = users.map((item) => item.age + 10)
console.log(mapMethod) // returns [ 35, 60, 42, 25, 63, 97 ]

const mapMethodWithForEach = []
users.forEach((item) => {
    mapMethodWithForEach.push(item.age + 10)
})
console.log(mapMethodWithForEach) // returns [ 35, 60, 42, 25, 63, 97 ]


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

//Bonus task => .reduce
const reduceMethod = users.reduce((acc, current) => acc + current.age, 0)
console.log(reduceMethod) //returns the sum of all users' ages

let sumOfAges = 0;
const reduceMethodWithForEach = users.forEach((user) => {
    sumOfAges = sumOfAges + user.age
})
console.log(sumOfAges) //returns the sum of all users' ages