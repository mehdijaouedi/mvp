const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/e-learning";

mongoose.set('strictQuery', false);

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});

const LearnSchema = new mongoose.Schema({
   comments: String,
   title:{type: String,
    required:true
  } ,
  
  details: {type:String,
  required: true},
});

const Learn = mongoose.model("learn", LearnSchema);

const getAll = (callback) => {
  Learn.find({}, callback)
}
let save = (params) => {
  let data = new Learn(params);
  return Learn.create(data);
};
let remove = (params)=> {
return Learn.findByIdAndRemove(params)
}

let update = (params) =>{
  return Learn.findOneAndUpdate (params)
 }


module.exports = {
  getAll,
  save,
  remove,
  update
};