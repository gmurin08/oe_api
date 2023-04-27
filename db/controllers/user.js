import mongoose from "mongoose"
import '../models/user.js'
const User = mongoose.model("user");
//TODO: Test POST/PUT routes and add DELETE
export async function userList(req, res) {
    User.find({})
        .then(users => {
            return (!users ? res.status(404) : res.status(200).json(users));
        }).catch(e => res.status(404).json(e));
}

export async function addUser(req,res) {
    await User.create({
        'username': req.body.username,
        'password': req.body.password,
        'role': req.body.role,
        'details':{
            'first_name':req.body.details.first_name,
            'last_name':req.body.details.last_name,
            'email':req.body.details.email,
            'hire_date':req.body.details.hire_date,
            'department':req.body.details.department
        }
    })
    .then(user=>res.status(201).json(user))
    .catch(e=>res.status(400).json(e))
}

export async function getUserById(req,res){
    await User.findOne({'_id':req.params.uid})
        .then(user=>!user?res.status(404):res.status(200).json(user))
        .catch(e=>res.status(404).json(e))
}

export async function updateUserById(req,res){
    User.findOneAndUpdate({'_id':req.params.uid},
    {
        'username': req.body.username,
        'password': req.body.password,
        'role': req.body.role,
        'details':{
            'first_name':req.body.details.first_name,
            'last_name':req.body.details.last_name,
            'email':req.body.details.email,
            'hire_date':req.body.details.hire_date,
            'department':req.body.details.department
        }
    },{new:true})
    .then(user=>!user?res.status(404):res.status(200).json(user))
    .catch(e=>res.status(500).json(e))
}

export async function deleteUser(req,res){
    User.findOneAndDelete({'_id':req.params.uid})
        .then(user=>!user?res.status(404):res.status(200).json(user))
        .catch(e=>res.status(500).json(e))
}

