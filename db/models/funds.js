import mongoose from 'mongoose'

const fundSchema = new mongoose.Schema({
    fund_id:{type:Number, required:true, unique:true},
    description:{type:String, required:true}
})

export default mongoose.model('funds', fundSchema)