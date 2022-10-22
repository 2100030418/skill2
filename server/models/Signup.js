const mongoose=require("mongoose");

const SignSchema=mongoose.Schema({
    fname:{
        type:String,
        required:true},
        lname:{
            type:String,
            required:true},
            email:{
                type:String,
                required:true 
            },
            password:{
                type:String,
                required:true
            },
           
});
const Sign=mongoose.model("AcData",SignSchema);
module.exports=Sign;