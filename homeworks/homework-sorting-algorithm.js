const nameArray = ["John", "Philip", "Jane", "Tom", "Rebeca"]
const numberArray = [1, 5, 6, 2, 9, 3, 6]
const objectArray = [
    {id: 1, name: "John", age: 25},
    {id: 15, name: "Jim", age: 50},
    {id: 34, name: "Julie", age: 32},
    {id: 76, name: "Becky", age: 15},
    {id: 45, name: "Jonathan", age: 53},
    {id: 12, name: "Frederick", age: 87},
]

// console.log(nameArray.sort()) // sorts nameArray in ascending order
// console.log(numberArray.sort()) //sorts numberArray in ascending order
// console.log(objectArray.sort((a, b) => a.id - b.id)) //sorts objectArray in ascending order

//sorting algorithm using .forEach
const sortedArray = [];
const sorted = (array) => {
    array.forEach((item) => {
        const index = sortedArray.findIndex((sortedItem) => item.id < sortedItem.id )
        if (index === -1) {
            sortedArray.push(item)
        } else {
            sortedArray.splice(index, 0, item)
        }
    })
}

sorted(objectArray)
console.log(sortedArray)



