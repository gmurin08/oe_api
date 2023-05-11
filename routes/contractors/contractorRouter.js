import express from 'express'
import * as contractorController from '../../db/controllers/contractor.js'
const contractorRouter = express.Router({mergeParams:true})

contractorRouter
    .route('/')
    .get(contractorController.contractorList)
    .post(contractorController.createContractor)

contractorRouter
    .route('/:contractor_num')
    .get(contractorController.getContractorByContractorNum)
    .put(contractorController.updateContractorByContractorNum)
    .delete(contractorController.deleteContractorByContractorNum)

export default contractorRouter

