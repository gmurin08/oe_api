import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import {db_conn} from './db/conn.mjs'
const dbUri = process.env.DB_URI
const port = process.env.PORT || 3000;
db_conn(dbUri)


const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.listen(port, ()=>{
    console.log(`API Listening on localhost:${port}`)
});