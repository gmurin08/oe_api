import mongoose from 'mongoose'

const contractorDepositSchema = new mongoose.Schema({
    contractor_num:Number,
    cash_code:{type:Number, min:1, max:6, default:1},
    num_employees:{type:Number, required:true},
    county:String,
    period_covered:Date,
    transaction_date:Date,
    deposit_num:Number,
    post_date:Date,
    contract:Date,
    paid:Number,
    hours:Number,
    gross:Number,
    type:String,
})

export default mongoose.model('contractor_deposit', contractorDepositSchema)