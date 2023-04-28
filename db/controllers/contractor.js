import mongoose from 'mongoose';
import '../models/contractor/contractor.js';
const Contractor = mongoose.model('contractor');

export function contractorList(req,res){
    Contractor.find({})
    .then(contractors=>!contractors?res.status(404):res.status(200).json(contractors))
    .catch(e=>res.status(404).json(e))
}

export function getContractorByContractorNum(req,res){
    Contractor.findOne({"contractor_num":req.params.contractor_num})
    .then(contractor=>!contractor?res.status(404):res.status(200).json(contractor))
    .catch(e=>res.status(404).json(e))
}

export function createContractor(req,res){
    Contractor.create({
        contractor_num:req.body.contractor_num,
        phone:req.body.phone,
        fax:req.body.fax,
        name:req.body.name,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        last_rep:req.body.last_rep,
        bill:req.body.bill,
        last_audit:req.body.last_audit,
        audit_thru:req.body.audit_thru,
        write_off:req.body.write_off
    }).then(contractor=>!contractor?res.status(500):res.status(201).json(contractor))
    .catch(e=>res.status(500).json(e))
}

export function updateContractorByContractorNum(req,res){
    Contractor.findOneAndUpdate({"contractor_num":req.params.contractor_num},{
        contractor_num:req.body.contractor_num,
        phone:req.body.phone,
        fax:req.body.fax,
        name:req.body.name,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        last_rep:req.body.last_rep,
        bill:req.body.bill,
        last_audit:req.body.last_audit,
        audit_thru:req.body.audit_thru,
        write_off:req.body.write_off
    },{new:true}).then(contractor=>!contractor?res.status(404):res.status(200).json(contractor))
    .catch(e=>res.status(404).json(e))
} 

export function deleteContractorByContractorNum(req,res){
    Contractor.findOneAndDelete({'contractor_num':req.params.contractor_num}) 
    .then(contractor=>!contractor?res.status(404):res.status(200).json(contractor))
    .catch(e=>res.status(500).json(e))
}

