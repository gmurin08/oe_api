import mongoose from 'mongoose'

const memberDepositSchema = new mongoose.Schema({
    contract:Number,
    contractor_num:Number,
    cash_code:{type:Number, min:1, max:6, default:1},
    county:String,
    period_covered:Date,
    transaction_date:Date,
    deposit_num:Number,
    post_date:Date,
    hours:Number,
    gross:Number,
    type:String,
})

export default mongoose.model('member_deposit', memberDepositSchema)