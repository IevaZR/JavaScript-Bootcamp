const welcomeMessage = (name) => {
    if (name.length > 3 && typeof name === 'string') {
        console.log(`Welcome ${name}!`)
    } else {
    console.log("Incorrect name")
    }
}

welcomeMessage("Jonathan")
welcomeMessage("Ji")
welcomeMessage(123)

//---------------------------------------------------

const highestNumber = (...numbers) => {
    return Math.max(...numbers)
}

console.log(highestNumber(1, 5, 64, 31, 42, 31))
console.log(highestNumber(2, 5))

//---------------------------------------------------

const getUserData = (name, surname, city) => {
    const user = {
        name: name,
        surname: surname,
        city: city,
    }
    return `Welcome ${user.name} ${user.surname} from ${user.city}`
}

console.log(getUserData("Tomass", "Smith", "London"))