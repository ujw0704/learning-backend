import mongoose from "mongoose";


const todoschema =new mongoose.Schema(
    {
        tittle:{

            title:String,
            required:true,
            maxLength:50,
        },


      discripition:{
        type:String,
        required:true,
        maxLength:50,
      },

      createdAt:{
        type:Date,
        required:true,
        default:Date.now()
      },
      updateAT:{
        type:Date,
        required:true,
        default:Date.now(),
      }

    },
    
    
    

);

module.exports = mongoose.model("Todo", todoschema)