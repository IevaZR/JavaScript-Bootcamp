import studentModel from "../models/studentModel.js";
//we import stundetn model from models

export const createStudent = async (req, res) => {
    
    try {
        const student = new studentModel({
            ...req.body //instead of specifying name, grade, email, we pass whatever we receive from body(Insomnia)
        })
    
        await student.save()
        res.status(201).send(`New student named ${req.body.name} is created`) //if everything goes well, we send this message
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const getAllStudents = async (req, res) => {
    
    try {
        const students = await studentModel.find({}) //this will find everything from database
    
        
        res.status(201).send(students) //if everything goes well, we send all students from database
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const getStudent = async (req, res) => {
    
    try {
        const students = await studentModel.find({name: req.params.name}) //this will find the student based on name
    
        
        res.status(201).send(students) //if everything goes well, we send all students from database
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const deleteStudent = async (req, res) => {
    
    try {
        const students = await studentModel.deleteOne({name: req.params.name}) //this will delete student based on name
    
        
        res.status(201).send(students) //if everything goes well, we send all students from database
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const updateStudent = async (req, res) => {
    
    try {
        const students = await studentModel.findOneAndUpdate({
            name: req.params.name
        }, {
            $set: req.body
        }, {
            new: true
        })
    
        
        res.status(201).send(students) //if everything goes well, we send all students from database
    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
