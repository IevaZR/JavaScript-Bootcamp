//sayInformation is a method within a class
class Student {
    constructor(name, points) {
        this.name = name;
        this.points = points
    }

    sayInformation () {
        console.log(`Student ${this.name} got ${this.points} points`)
    }
}
//this is how we call class
const student1 = new Student("Mustafa", 55)
const student2 = new Student("Denis", 88)

//to console log the class without calling the method within the class
console.log(student1) // console.logs => Student { name: 'Mustafa', points: 55 }
console.log(student2)

//to use the method with the class (to invoke the method)
student1.sayInformation() // console.logs => Student Mustafa got 55 points


class BankAccount {
    constructor(name, number, money) {
        this.accountHolder = name
        this.accountNumber = number
        this.balance = money
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if(amount <= this.balance) {
            this.balance -= amount
        } else {
            console.log(`Account ${this.accountHolder} does not have enough balance: ${this.balance}`)
        }
    }

    checkBalance() {
        console.log(`Account ${this.accountHolder} has ${this.balance} remaining`)
    }
}

//creating objects from this class
const account1 = new BankAccount("Mustafa", 218261726182, 500)
console.log(account1)
// console.logs =>
// BankAccount {
//     accountHolder: 'Mustafa',
//     accountNumber: 218261726182,
//     balance: 500
//   }

account1.deposit(500) //now the balance for account1 has been incremented by 500
account1.withdraw(1500) //now the balance has been decreased by 150
account1.checkBalance() //method for checking account balance
console.log(account1)

const myArr = [
    { money: 5, name: "Viola", accNumber: 2178525341753},
    { money: 25, name: "Kristiana", accNumber: 217328521753},
    { money: 2, name: "Simona", accNumber: 217852143753},
    { money: 3, name: "Ieva", accNumber: 217852172453},
    { money: 30, name: "Simona", accNumber: 217852421753},
]

const answer = myArr.map((item) => {
    return class {
        constructor(name, accNumber, money) {
            this.accountHolder = item.name
            this.accountNumber = item.accNumber
            this.balance = item.money
        }
    
        deposit(amount) {
            this.balance += amount
        }
    
        withdraw(amount) {
            if(amount <= this.balance) {
                this.balance -= amount
            } else {
                console.log(`Account ${this.accountHolder} does not have enough balance: ${this.balance}`)
            }
        }
    
        checkBalance() {
            console.log(`Account ${this.accountHolder} has ${this.balance} remaining`)
        }
    }
})

console.log(new answer[0]())



class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    getArea() {
        return this.height * this.width
    }

    getPerimeter() {
        return (this.height + this.width) * 2
    }
}

const rectangle1 = new Rectangle(10, 20)
console.log("🚀 ~ file: learningClasses.js:113 ~ rectangle1:", rectangle1.getArea())
console.log("🚀 ~ file: learningClasses.js:113 ~ rectangle1:", rectangle1.getPerimeter())


// these two functions are the same as in the class, but they are completely seperate. 
// therefore sometimes it is better to create them within classes, so that it is more understandable
const getArea = (height, width) => {
    return height * width
}
const getPerimeter = (height, width) => {
    return (height + width) * 2
}