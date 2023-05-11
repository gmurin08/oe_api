import mongoose from 'mongoose'

const contractorDepositSchema = new mongoose.Schema({
    contractor_num:Number,
    cash_code:{type:Number, min:1, max:6, default:1},
    employees:[{
        member_id:{type: Schema.Types.ObjectId, ref:'member'},
        hours:Number
    }],
    /*Calculate dynamically after consuming employees array
    and verifying how many, if any members aren't yet in the system.
    This will address  edge cases surrounding deposits containing
    unknown members who aren't yet entered.*/
    num_employees:Number,
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