import mongoose from 'mongoose'

const pensionCheckSchema = new mongoose.Schema({
    audit_num:Number,
    member_soc:{type:Number, required:true, min:9, max:9},
    payee_soc:{type:Number, required:true, min:9, max:9},
    first_name:{type:String, required:true, maxLength:40},
    last_name:{type:String, required:true, maxLength:60},
    street:String,
    city:String,
    state:String,
    zip:String,
    void_code:Number,
    check_code:String,
    beneficiary:Number,
    percentage_of_distribution:Number,
    direct_deposit:Boolean,
    payment_taxable:Boolean,
    check_entries:[{
        transaction:{type:Number, min:0, max:999},
        frequency:{type:Number, min:0, max:9},
        year:{type:Number, min: 1900, max: 3000},
        amount:Number
    }],
    total_payments:{type:Number, min:0, max:999},
    current_payment:{type:Number, min:1, max:999},
    check_number:{type:Number, max:999999 },
    date_paid:Date,
    edit_code:{type:String, minLength:1, maxLength:1},
    total_paid:Number,
    process_date:Date,
    dir_dep_tran_code:{type:Number, min:0, max:99},
    dir_dep_aba_num:{type:Number, min:0, max:999999999},
    dir_dep_account_num:{type:Number},
    dir_dep_account_len:{type:Number, min:0, max:99}
})