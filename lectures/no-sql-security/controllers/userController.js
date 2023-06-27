import userModel from '../models/userModel.js';

export const createUser = async (req, res) => {
    try {const newUser = new userModel({
        userName: req.body.userName,
        password: req.body.password

        //or we can write just ...req.body
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