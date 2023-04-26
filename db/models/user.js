import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    details:{
        first_name:String,
        last_name:String,
        email:String,
        hire_date: Date,
        department:Number
    },
    logfile:[
        {
            type:String,
            date: Date,
            prev:Object
        }
    ]
})

export default mongoose.model("user", userSchema);