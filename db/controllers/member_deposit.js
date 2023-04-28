import mongoose from 'mongoose'
const MemberDeposit = new mongoose.model('member_deposit')
const Member = new mongoose.model('member')

//GET '/members/deposits'
export function getAllMemberDeposits(req,res){
    MemberDeposit.find({}).then(memberDeposits=>{
        if(!memberDeposits){
            return res.status(400).json({'message':'No deposits found'})
        }else{
            return res.status(200).json(memberDeposits)
        }
    }).catch(e=>res.status(404).json(e))
}

//GET '/members/:id/deposits'
export function getAllMemberDepositsByMemberId(req,res){
    MemberDeposit.find({'member_id':req.params.id})
    .then(memberDeposits=>{
        if(!memberDeposits){
            return res.status(400)
            .json({'message':'No deposits found for member id: ' + req.params.id})
        }else{
            return res.status(200).json(memberDeposits)
        }
    }).catch(e=>res.status(404).json(e))
}

//PUT '/members/deposits/:id'
export function updateMemberDepositById(req,res){
    MemberDeposit.findOneAndUpdate({'_id':req.params.id},{
        contract:req.body.contract,
        contractor_num:req.body.contractor,
        contractor_deposit:req.body.contractor_deposit,
        cash_code:req.body.cash_code,
        county:req.body.county,
        period_covered:req.body.period_covered,
        transaction_date:req.body.transaction_date,
        deposit_num:req.body.deposit_num,
        post_date:req.body.post_date,
        hours:req.body.hours,
        gross:req.body.gross,
        type:req.body.type
    },{new:true}).then(memberDeposit=>res.status(200).json(memberDeposit))
    .catch(e=>res.status(500).json(e))
}

//POST '/members/:id/deposits
export function createMemberDepositByMemberId(req,res){
    MemberDeposit.create({
        contract:req.body.contract,
        contractor_num:req.body.contractor,
        contractor_deposit:req.body.contractor_deposit,
        contractor_id:req.body.contractor_id,
        cash_code:req.body.cash_code,
        county:req.body.county,
        period_covered:req.body.period_covered,
        transaction_date:req.body.transaction_date,
        deposit_num:req.body.deposit_num,
        post_date:req.body.post_date,
        hours:req.body.hours,
        gross:req.body.gross,
        type:req.body.type
    }).then(memberDeposit=>{
        if(!memberDeposit){
            return res.status(500).json({'message':'Unable to create deposit'})
        }else{
            return res.status(200).json(memberDeposit)
        }}).catch(e=>res.status(500).json(e))
}

//DELETE '/members/deposits/:id
export function deleteMemberDepositById(req,res){
    MemberDeposit.findOneAndRemove({'_id':req.params.id})
    .then(memberDeposit=>res.status(201).json(memberDeposit))
    .catch(e=>res.status(500).json(e))
}