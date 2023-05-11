import express from "express";
const apiRouter = express.Router();

import userRouter from "./users/userRouter.js";
import memberRouter from './members/memberRouter.js'
import contractorRouter from './contractors/contractorRouter.js'

apiRouter.use('/users', userRouter)
apiRouter.use('/members', memberRouter)
apiRouter.use('/contractors', contractorRouter)


export default apiRouter