import mongoose from 'mongoose';
import '../models/member/member.js';
const Member = mongoose.model('member');

export function memberList(req,res){
    Member.find({})
    .then(members=>!members?res.status(404):res.status(200).json(members))
    .catch(e=>res.status(404).json(e))
}

export function getMemberById(req,res){
    Member.findOne({"contractor_num":req.params.contractor_num})
    .then(member=>!member?res.status(404):res.status(200).json(member))
    .catch(e=>res.status(404).json(e))
}

export function createMember(req,res){
    Member.create({
        first_name:req.body.first_name,
        middle_name:req.body.middle_name,
        last_name:req.body.last_name,
        ssn:req.body.ssn,
        email:req.body.email,
        phone:req.body.phone,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        sex:req.body.sex,
        marital_status:req.body.marital_status,
        rate_code:req.body.rate_code,
        local:req.body.local,
        transfer:req.body.transfer,
        last_eligibility:req.body.last_eligibility,
        reserve:req.body.reserve,
        healhcare_plan:req.body.healthcare_plan,
        status:req.body.status,
        last_remittance:req.body.last_remittance,
        pac:req.body.pac,
        cancel_date:req.body.cancel_date,
        pension_amount:req.body.pension_amount,
        effect_date:req.body.effect_date,
        effect_code:req.body.effect_code,
        umi_num:req.body.umi_num,
        wellness:req.body.wellness
    }).then(member=>!member?res.status(500):res.status(201).json(member))
    .catch(e=>res.status(500).json(e))
}

export function updateMemberById(req,res){
    Member.findOneAndUpdate({"_id":req.params.id},{
        first_name:req.body.first_name,
        middle_name:req.body.middle_name,
        last_name:req.body.last_name,
        ssn:req.body.ssn,
        email:req.body.email,
        phone:req.body.phone,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        sex:req.body.sex,
        marital_status:req.body.marital_status,
        rate_code:req.body.rate_code,
        local:req.body.local,
        transfer:req.body.transfer,
        last_eligibility:req.body.last_eligibility,
        reserve:req.body.reserve,
        healhcare_plan:req.body.healthcare_plan,
        status:req.body.status,
        last_remittance:req.body.last_remittance,
        pac:req.body.pac,
        cancel_date:req.body.cancel_date,
        pension_amount:req.body.pension_amount,
        effect_date:req.body.effect_date,
        effect_code:req.body.effect_code,
        umi_num:req.body.umi_num,
        wellness:req.body.wellness
    },{new:true}).then(member=>!member?res.status(404):res.status(200).json(member))
    .catch(e=>res.status(404).json(e))
} 

export function deleteMemberById(req,res){
    Member.findOneAndDelete({'_id':req.params.id}) 
    .then(member=>!member?res.status(404):res.status(200).json(member))
    .catch(e=>res.status(500).json(e))
}

