import mongoose from "mongoose";
import express from "express";
import userRoute from './routes/userRoutes.js'

const app = express()
const port = 5000

app.use(express.json())

const connectionToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.iwt6vam.mongodb.net/users');
        console.log('Connection to DB is successful');
    } catch (error) {
        console.log(error)
    }
}

app.use('/user', userRoute)

app.listen(port, () => {
    connectionToDB()
    console.log(`Server started on port ${port}`)
})
