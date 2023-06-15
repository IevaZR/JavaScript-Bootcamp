class CartItem {
    constructor(name, price, quantity) {
        this.itemName = name
        this.itemPrice = price
        this.itemQuantity = quantity
    }
}

const shoppingCart = []

// Add items to shopping cart
const addItemToShoppingCart = (name, price, quantity) => {
    shoppingCart.push(new CartItem(name, price, quantity)) //adds new item to shoppingCart
}
addItemToShoppingCart("bananas", 1, 10)
addItemToShoppingCart("apples", 0.5, 10)
addItemToShoppingCart("kiwi", 5, 10)
addItemToShoppingCart("tomatoes", 0.20, 10)
console.log(shoppingCart)



// Calculate total price of the shopping cart
let totalPrice = shoppingCart.reduce((acc, current) => acc + (current.itemPrice*current.itemQuantity), 0) //calculates total price of the shoppingCart
console.log(totalPrice)

// Remove items from shopping cart
const removeItems = (itemName) => {
    const index = shoppingCart.findIndex((cartItem) => cartItem.itemName === itemName) //finds the index of the item 
    shoppingCart.splice(index, 1) //removes the item with the specific index
}
removeItems("bananas")
console.log(shoppingCart)

// Update item quantity in the shopping cart
const updateQuantity = (itemName, newQuantity) => {
    const index = shoppingCart.findIndex((cartItem) => cartItem.itemName === itemName) //finds the index of the item 
    shoppingCart[index].itemQuantity = newQuantity //sets a new quantoty for the item with the specific index
}
updateQuantity("tomatoes", 20)
console.log(shoppingCart)

// Clear all items from the shopping cart
const clearShoppingCart = () => {
    shoppingCart.splice(0, shoppingCart.length) //removes all items from the shopping cart
}
clearShoppingCart()
console.log(shoppingCart)

addItemToShoppingCart("cherries", 5, 5)
addItemToShoppingCart("blueberries", 2, 20)
addItemToShoppingCart("mangoes", 1, 5)
console.log(shoppingCart)

// Apply coupon code to shopping cart
const applyCoupon = (code) => {
    if (code === "SAVE10") {
        totalPrice = totalPrice*0.9
    } else if (code === "SAVE20") {
        totalPrice = totalPrice*0.8
    } else if (code === "SAVE50") {
        totalPrice = totalPrice*0.5
    }
    return totalPrice
}

console.log(totalPrice) //total price before applying coupon code
applyCoupon("SAVE50") //coupon code applied
console.log(totalPrice) //total price with discount
