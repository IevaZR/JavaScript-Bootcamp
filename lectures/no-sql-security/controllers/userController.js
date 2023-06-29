import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt'; //we import tis library to encrypt our passwords in userModel
import jwt from 'jsonwebtoken'; //we import this library to create web token, which will handel users web session 

//if we want to create a website where users log in and we want to display a page visible only for loged in users
export const loginUser = async (req, res) => {
    try{
        //we check if that user, who wants to login, exists
        const foundUser = await userModel.findOne({userName: req.body.userName})

        //if the user doesn't exist, we send back a status message
        if(!foundUser) {
            return res.status(404).send('Username or Password is wrong!')
            //`User with ${req.body.userName} doesn't exist` -> this is a message that we shouldn't send, so that the hacker doesn't know if he has guessed if there is such a user with such username
        }

        //if foundUser we need to decrypt the password and compare it
        const isUserPasswordCorrect = bcrypt.compareSync(req.body.password.toString(), foundUser.password)
        //the first parameter is the password that the user is entered when trying to log in, and the second is the encrypteed password to compare it to

        //if the password is not correct
        if(!isUserPasswordCorrect) {
            return res.status(404).send('Username or Password is wrong!!')
        }

        //the first parameter is a unique user id or user name or any other unique user parameter. better for it to be ID from MongoDB
        // the second parameter is a secret key (our own) which is kep in .env
        //the third parameter is the expire option - token will expire after certain time - in this time it will be 60 seconds
        const token = jwt.sign({id: foundUser._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
        //this creates a token that will be used for session handeling. once we have the token, we have to store it somewhere in the browser
        //there are many ways to store the token. we can store it in the local storage. another better place is a 'cookie'
        
        //if everything is correct, for now we just send the message
        console.log("Hey! You are logged in!")

        //here we add the cookie
        //first parameter is the name of the cookie (whateevr we like), the second is the thing that we are saving, the third is an option
        res.cookie('session_token', token, {httpOnly: true}).status(200).send(`Hello, ${foundUser.userName}!`)

    } catch (error) {

    }
}

export const createUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10) //it takes our encription key and tries to encrypt it with ten rounds (by default) of encryption
        const hashedPassword = bcrypt.hashSync(req.body.password.toString(), salt) //here we also hash the password
        //we also indicated in userModel that password should be a string, therefore we make sure that it turns it into a string
        const newUser = new userModel({
        ...req.body,
        password: hashedPassword,
        
        // //or we can write just 
        // //userName:req.body.userName,
        // //password:req.body.password,

        isAdmin: false //if we set this to false here it will override the value indicated in userModel
    })

    await newUser.save()

    //const {password, ...remainingUserData} = newUser //this takes the object, puts password away and gives back everything else, except for the password. this is called destructuring. we are destructuring the object, extracting the password and getting back everything else from the object. 
    //but this object has a lot of parameters, that MongoDB created
    //therefore we get it no from newUser, but from newUser_doc, where the user is stored

    const {password, ...remainingUserData} = newUser._doc

    res.status(201).json(remainingUserData)
    //route doesn't know hot to respond to user, therefore we have to send satus
} catch(error){
    console.log(error)
    res.status(400).send(error) //if we are not sending the error, we don't see the error message in Insomnia
}
}

export const getAllUsers = async (req, res) => {
    
    try {
        const users = await userModel.find({}, {password:0}) //the second parameter is from Mongoose documentation, which says, don't swend back the parameter named password
    
        
        res.status(201).send(users) 
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const getUser = async (req, res) => {
    
    try {
        const user = await userModel.findOne({userName: req.body.userName}, {password:0}) //the second parameter is from Mongoose documentation, which says, don't swend back the parameter named password
    
        
        res.status(201).send(user) 
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const deleteUser = async (req, res) => {
    
    try {
        const deletedUser = await userModel.findOneAndDelete({userName: req.body.userName})

        const {password, ...remainingUserData} = deletedUser._doc
        
        res.status(201).send(remainingUserData) 
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const updateUser = async (req, res) => {
    
    try {
        const updatedUser = await userModel.findOneAndUpdate({
            userName: req.params.userName //body is json object that we send, params is url that we add behind the url. we decide how to do
        }, {
            $set: req.body
        }, {
            new: true
        })
    
        const {password, ...remainingUserData} = updatedUser._doc
        
        res.status(201).send(remainingUserData)
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const countUsers = async (req, res) => {
    
    try {
        const {userName} = req.body
        const countedUsers = await userModel.countDocuments({userName})
        res.status(201).send(countedUsers.toString())
        
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const sortUsers = async (req, res) => {
    
    try {
        const sortedUsers = await userModel.find({}, {password:0}).sort({userName:'asc'})
        
       
        res.status(201).send(sortedUsers)
        
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const limitUsers = async (req, res) => {
    
    try {
        const sortedUsers = await userModel.find({}, {password:0}).sort({userName:'desc'}).limit(5)
        
       
        res.status(201).send(sortedUsers)
        
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}