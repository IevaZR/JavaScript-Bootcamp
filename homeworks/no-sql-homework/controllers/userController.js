import userModel from "../models/userModel.js"

const createUser = async (req, res) => {
    
    try {
        const user = new userModel({
            ...req.body
        })
        await user.save()
        res.status(201).send(`New user named ${req.body.userName} is created`)
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const getAllUsers = async (req, res) => {
    
    try {
        const users = await userModel.find({})

        res.status(201).send(users)
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const getUser = async (req, res) => {
    
    try {
        const users = await userModel.find({userName: req.params.userName})

        res.status(201).send(users)
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const deleteUser = async (req, res) => {
    
    try {
        const users = await userModel.deleteOne({userName: req.params.userName})

        res.status(201).send(users)
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const updateUser = async (req, res) => {
    
    try {
        const users = await userModel.findOneAndUpdate({
            userName: req.params.userName
        }, {
            $set: req.body
        }, {
            new: true
        })

        res.status(201).send(`User ${req.params.userName} has been updated`)
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export {createUser, getAllUsers, getUser, deleteUser, updateUser}