const express=require("express");
const router=express.Router();
const {    getContact,
   CreateContact,
   updateContact,
   deleteContacts} =require("../contactControllers");
 router.route("/").get(getContact).post(CreateContact);
 router.route("/:id").put(updateContact).delete(deleteContacts);

 module.exports=router;