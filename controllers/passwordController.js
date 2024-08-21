const asyncHandler = require("express-async-handler");
const Password = require("../models/passwordModel");

//@desc Get all passwords
//@route GET /api/passwords
//@access public
const getPasswords = asyncHandler(async (req, res) => {
    const passwordData = await Password.find();
    res.status(200).json(passwordData);
});


//@desc create password
//@route POST /api/passwords
//@access public
const createPassword = (req, res) => {
    res.status(200).json({message:"create password"});
};

//@desc Get password with id
//@route GET /api/passwords/:id
//@access public
const getPassword = (req, res) => {
    res.status(200).json({message:`get password for ${req.params.id}`});
};

//@desc Update password 
//@route PUT /api/passwords
//@access public
const updatePassword = (req, res) => {
    res.status(200).json({message:`update password for ${req.params.id}`});
};

//@desc Delete password 
//@route DELETE /api/passwords
//@access public
const deletePassword = (req, res) => {
    res.status(200).json({message:`delete password for ${req.params.id}`});
};





module.exports = {getPasswords, createPassword,getPassword, updatePassword, deletePassword};