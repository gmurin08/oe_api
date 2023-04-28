import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true, 'First Name is a required field.'],
        maxLength:[40, 'First Name must not exceed 40 characters. Got {VALUE}']
    },
    middle_name:String,
    last_name:{
        type:String,
        required:[true, 'Last Name is a required field.'],
        maxLength:[60, 'Last Name must not exceed 40 characters. Got {VALUE}']
    },
    ssn:{type:String, minLength:9, maxLength:9},
    email:{type:String, maxLength:60},
    phone:{home:String,work:String,cell:String},
    street:String,
    city:String,
    state:String,
    zip:String,
    sex:{type:String,enum:['Male', 'Female'],required:true},
    marital_status:{type:String,enum:['Single', 'Divorced', 'Married']},
    rate_code:Number,
    local:Number,
    transfer:{type:Boolean, default:false},
    last_eligibility:Date,
    reserve:{type:Number,default:0},
    healhcare_plan:String,
    status:Number,
    last_remittance:Date,
    pac:String,
    cancel_date:Date,
    pension_amount:Number,
    effect_date:Date,
    effect_code:String,
    umi_num:String,
    wellness:Boolean
})

export default mongoose.model('member',memberSchema)