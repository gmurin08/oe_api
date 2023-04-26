import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()

//Mongoose
import {db_conn} from './db/conn.mjs'
const dbUri = process.env.DB_URI
db_conn(dbUri)

//Routes
import apiRouter from './routes/router.js'

//Server Initialization
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', apiRouter)

//Connection
app.listen(port, ()=>{
    console.log(`✅ API Listening on localhost:${port}`)
});