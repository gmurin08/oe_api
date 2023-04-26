import {connect} from 'mongoose'

export async function db_conn(dbUri){
    await connect(dbUri).then(()=>{
        console.log('🚧 Connected to OE Development Database 🚧')
    }).catch(e=>console.log(e))
}
// TODO. Modularize the connection for selecting DEV or PROD from index.js
// export default class OEDatabase{
//     constructor(){

//     }
//     async connect(){
//         await conn(dbUri).then(()=>{
//             console.log('Connected to OE_Dev DB')
//         }).catch(e=>console.log(e))
//     }
// }