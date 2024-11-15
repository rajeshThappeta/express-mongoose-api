const mongoose = require("mongoose");

//create userSChema (username,password,city & age)
const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true,
    },
    city:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      required:true,
      min:18,
      max:60
    }

  },   
  { strict: "throw" }
);

//create model for userSchema
const UserModel = mongoose.model("user", userSchema);

//export
module.exports = UserModel;
