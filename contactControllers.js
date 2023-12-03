// @desc Get all contacts
// @route GET/api/contacts
// @ access public
const getContact = (req,res) =>{
    res.status(200).json({message : "get all contacts"})
};
// @disc Post all contacts
//@route POST/all/api/contacts/
// @ access public
const CreateContact = (req,res) =>{
    console.log("the request  body",req.body);
    res.status(201).json({message: "Create all contacts"});
};
// @disc Put all contacts
// @routes PUT/all/api/contacts/:id
// @access public
const updateContact =(req,res) =>{
    res.status(202).json({message:"UPdate all my contacts"})

};
// @disc Delete all contacts
// @routes DELETE/all/my/api/contacts/:id
// @access public
const deleteContacts = (req,res) =>{
    res.status(203)
.json({message:"delete all my conatacts"})
};
module.exports = {
    getContact,
    CreateContact,
    updateContact,
    deleteContacts}
