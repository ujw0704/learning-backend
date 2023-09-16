import mongoose from "mongoose"
  
require("dotenv").config()
 const dbconnect =()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true ,
        useUnifiedTopology: true,
    
    })
    .then(()=>{
        console.log('database connected')
    })
    .catch(()=>{
        console.log("db is not connected")
         
        process.exit(1)
    });
    
 }
 module.export = dbconnect;