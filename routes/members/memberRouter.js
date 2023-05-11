import express from 'express'
import * as memberController from '../../db/controllers/member.js'
const memberRouter = express.Router({mergeParams:true})

memberRouter
    .route('/')
    .get(memberController.memberList)
    .post(memberController.addMember)

memberRouter
    .route('/:id')
    .get(memberController.getMemberById)
    .put(memberController.updateMemberById)
    .delete(memberController.deleteMemberById)

export default memberRouter
