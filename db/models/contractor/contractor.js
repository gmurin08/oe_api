import mongoose from "mongoose";

const contractorSchema = new mongoose.Schema({
    contractor_num:{type:Number, required:true},
    phone:String,
    fax:String,
    name:{type:String,maxLength:40},
    street:String,
    city:String,
    state:String,
    zip:String,
    associations:[Number],
    last_rep:Date,
    bill:Date,
    last_audit:Date,
    audit_thru:Date,
    write_off:{type:Boolean,default:false}
})

export default mongoose.model('contractor', contractorSchema)