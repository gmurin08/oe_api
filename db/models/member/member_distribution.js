import mongoose, { Schema } from 'mongoose'

const memberDistributionSchema = new mongoose.Schema({
    deposit_id:{type: Schema.Types.ObjectId, ref:'member_deposit'},
    fund_id:{type:Number, min:1, max:1000},
    amount:Number,
    period_covered:Date,
    deposit_num:Number,
    cash_code:{type:Number, min:1, max:6, default:1}
})

export default mongoose.model('member_distribution', memberDistributionSchema)