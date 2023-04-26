import mongoose from "mongoose"
import '../models/user.js'
const User = mongoose.model("user");

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
            'first_name':req.body.first_name,
            'last_name':req.body.last_name,
            'email':req.body.email,
            'hire_date':req.body.hire_date,
            'department':req.body.department
        }
    })
    .then(user=>res.status(201).json(user))
    .catch(e=>res.status(400).json(e))
}

export async function getUserById(req,res){
    await User.findOne({'details.email':req.params.uid})
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
            'first_name':req.body.first_name,
            'last_name':req.body.last_name,
            'email':req.body.email,
            'hire_date':req.body.hire_date,
            'department':req.body.department
        }
    })
    .then(user=>!user?res.status(404):res.status(200).json(user))
    .catch(e=>res.status(500).json(e))
}

