import mongoose from "mongoose";
import express from "express";
import studentRoute from './routes/studentRoute.js'

const app = express()
const port = 3005

app.use(express.json())

// //we create a studentSchema db in moongoose using its method .Schema
// const studentSchema = new mongoose.Schema({
//     //the first property is name, which is a string and is required
//     name: {
//         type: String,
//         required: true,
//     },
//     // grade property is also required with minimum value of 1 and maximum value of 10
//     grade: {
//         type: Number,
//         min: 1,
//         max: 10,
//         required: true
//     },
//     email: {
//         type: Number,
//     },
// })

// const Student = mongoose.model('Student', studentSchema)
//after we do this, now we will be able to create some record in database

//we use async functions, because we are trying to connect to database, which is hosted on a server
//but connection to server takes time. and for that to work (to received the answer from database), we use async function
//then await keyword will be accessible to us, and we can wait until the answer is accessible to us
const connectionToDB = async () => {
    //we use try and catch block to try to connect to database, but if it is unsuccessfl, then we catch error and console log it
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.iwt6vam.mongodb.net/students'); //we get this link from cluster in MongoKDB.com and we change user name and password to our own and add our database name at the end
    
        // //we create a new record for database
        // const newStudent1 = new Student({
        //     name: "Denis",
        //     grade: 10,
        // })
        // //then we save it and we should see it in the MongoDB.com, but this is not the proper way. it is just to see how the record is created in the DB
        // newStudent1.save()
        // //in this case everythime the code runs, it will create a new record. so we will use another method

        console.log('Connection to DB is successful');
    } catch (error) {
        console.log(error)
    }

    //another method to write this code, but it is preferable to use the upper method
    // mongoose
    // .connect('mongodb+srv://admin:admin@cluster0.iwt6vam.mongodb.net/')
    // .then ( ()=> {
    //     console.log('Connection to DB is successful');
    // })
    // .catch((error) => {
    //     console.log(error)
    // })
   
};

app.use('/student', studentRoute)

app.listen(port, () => {
    connectionToDB()
    console.log(`Server started on port ${port}`)
})

//index file should be very simple, therefore we move all the other information to other files