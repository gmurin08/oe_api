import mongoose from 'mongoose'

const memberDepositSchema = new mongoose.Schema({
    member_id:{type: Schema.Types.ObjectId, ref:'member', required:true},
    contract:Number,
    contractor_num:Number,
    contractor_deposit:{type: Schema.Types.ObjectId, ref:'contractor_deposit'},
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