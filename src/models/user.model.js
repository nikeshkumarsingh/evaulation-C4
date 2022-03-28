const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema(
    {
      firstName:{type:String,required:true},
      lastName:{type:String,required:true},
      email:{type:String,required:true,unique:true},
      password:{type:String,required:true},

    },
    {
        timestamps:true,
    }
)

const User=mongoose.model("user",userSchema)
module.exports=User;