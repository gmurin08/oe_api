import {connect} from 'mongoose'

export async function db_conn(dbUri){
    await connect(dbUri).then(()=>{
        console.log('Connected to OE_Dev DB')
    }).catch(e=>console.log(e))
}