const express=require("express");
const mongoose=require("mongoose");
const route=express.Router();
const dotenv=require("dotenv").config();
const app=express();
const UserModel=require("./main/contactMain");
const port=process.env.PORT||5000;


mongoose.connect("mongodb://127.0.0.1:27017/contacts")
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log(err);
});

app.use(express.json())
app.use("/api/contacts",require("./routers/contactrouters"));

app.post("/api/post",async function(req,res){
    const newUser=new UserModel({name:req.body.name,email:req.body.email,phoneno:req.body.phoneno});

    try{
        await newUser.save();
        res.status(200).json({message:"success"})
    }catch(error){
        console.log(error)
    }
 

    
});



// route.post("/",(req,res)=>{
//     const data = UserModel({
//         name : req.body.name,
//         email: req.body.email,
//         phoneno:req.body.phoneno,
//       });
// try{
//     data.save()
// }catch(err){
//     console.log(err.message);
// }finally{
//     console.log("saved sucessfully");
// }


// });





app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});