import {model} from "mongoose"
const User = model('user');

export async function userList(req, res) {
    User.find({})
        .then(users => {
            return (!users ? res.status(404) : res.status(200).json(users));
        }).catch(e => res.status(404).json(e));
}