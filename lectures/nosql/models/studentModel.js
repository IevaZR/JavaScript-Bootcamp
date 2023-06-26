import mongoose from "mongoose";

//we create a studentSchema db in moongoose using its method .Schema and what properties this schema will have
const studentSchema = new mongoose.Schema({
    //the first property is name, which is a string and is required
    name: {
        type: String,
        required: true,
        unique: true,
    },
    // grade property is also required with minimum value of 1 and maximum value of 10
    grade: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    email: {
        type: String,
    },
},{
    timestamps: true
    //this creates a time when record has been created in database
})

export default mongoose.model('student', studentSchema)
//we create our user model with the following schema