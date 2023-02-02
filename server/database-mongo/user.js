const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/elearning";

mongoose.set('strictQuery', false);

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});


const UserSchema = new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        message:String
    }
  
  })
  const User = mongoose.model("user",UserSchema)
  const getUser = (callback) => {
    User.findById  ({}, callback)
  }
  let saveUser = (params) => {
    let data = new User(params);
    return User.create(data);
  };
  module.exports = {
    getUser,
    saveUser
  };