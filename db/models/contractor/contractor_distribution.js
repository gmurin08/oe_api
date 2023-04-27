import mongoose from 'mongoose'

const contractorDistributionSchema = new mongoose.Schema({
    contractor_num:Number,
    fund_id:{type:Number,min:1, max:1000, required:true},
    amount:{type:Number, required:true}
})

export default mongoose.model('contractor_distribution', contractorDistributionSchema)