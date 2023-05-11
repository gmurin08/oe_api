import {db_conn} from '../conn.mjs'
import mongoose from 'mongoose'
import fs from 'fs'
import csv from 'csv-parser'
const dbUri = 'mongodb://127.0.0.1:27017/OE'
import '../models/funds.js';
import '../models/contractor/contractor.js'
const Fund = mongoose.model('funds');
const Contractor = mongoose.model('contractor');
const results = []

async function uploadToDB(){
    await db_conn(dbUri).then(()=>parseCSV())
}

function parseCSV(){
fs.createReadStream('./funds.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    Fund.insertMany(results).then(()=>{
        console.log('✅ Success! Data Uploaded to MongoDB.')
        mongoose.connection.close()
        console.log(`Closed connection to ${dbUri}.`)
    })
    .catch(e=>console.log(`❌ An Error Occured: \n${e}`))
  });
}

uploadToDB()