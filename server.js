const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const app=express();
const port=process.env.PORT||5000;


mongoose.connect("mongodb://127.0.0.1:27017/keerthana")
.then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
    console.log(err);
});
// schema
const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type:String,
        required:true,
        Unique: true,
    },
    phoneno :{
        type :String,
        required:true,
},
});
const UserModel = new mongoose.model("UserModel",UserSchema)

app.use(express.json())
app.use("/api/contacts",require("./routers/contactrouters"));

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})