const express=require("express");

const mongoose=require("mongoose")



const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required:true,
        Unique: true,
    },
    phoneno :{
        type :String,
        required:true,
},
});

module.exports=mongoose.model("contacts",contactschema);