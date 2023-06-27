import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express'
import userRoute from './routes/userRoute.js'

const app = express()
const port = 3005

app.use(express.json())

dotenv.config()

const connectionToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL); //this is connected to .env file
    console.log("Connected to DB")
} catch (error) {
    console.log(error)
}
}

app.use('/', userRoute)

app.listen(port, () => {
    connectionToDB()
    console.log(`Server started on port ${port}`)
})