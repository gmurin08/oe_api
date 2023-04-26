import express from 'express'
import * as userController from '../../db/controllers/user.js'
const userRouter = express.Router({mergeParams:true})

userRouter
    .route('/')
    .get(userController.userList)
    .post(userController.addUser)

userRouter
    .route('/:uid')
    .get(userController.getUserById)
    .put(userController.updateUserById)

export default userRouter
