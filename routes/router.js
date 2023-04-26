import express from "express";
const apiRouter = express.Router();
import userRouter from "./users/userRouter.js";

apiRouter.use('/users', userRouter)
//TODO: Add member and contractor functionality
// apiRouter.use('/members', memberRouter)
// apiRouter.use('/contractors', contractorRouter)


export default apiRouter