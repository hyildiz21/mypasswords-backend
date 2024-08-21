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
const createPassword = asyncHandler(async (req, res) => {
    console.log("request body: ",req.body);
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400)
        throw new Error("All fields are mandatory!");
    }
    const passwordData = await Password.create({
        username,
        password,

    });

    res.status(201).json(passwordData);
});

//@desc Get password with id
//@route GET /api/passwords/:id
//@access public
const getPassword = asyncHandler(async (req, res) => {
    const passwordData = await Password.findById(req.params.id);
    if (!passwordData) {
        res.status(404)
        throw new Error("Password not found");
    }
    
    res.status(200).json(passwordData);
});

//@desc Update password 
//@route PUT /api/passwords
//@access public
const updatePassword =asyncHandler(async (req, res) => {
    const passwordData = await Password.findById(req.params.id);

    if (!passwordData) {
        res.status(404)
        throw new Error("Password not found");
    }

    const updatedPassword = await Password.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );   
    res.status(200).json(updatedPassword);
});

//@desc Delete password 
//@route DELETE /api/passwords
//@access public
const deletePassword =asyncHandler(async (req, res) => {
    const passwordData = await Password.findById(req.params.id);
    if (!passwordData) {
        res.status(404)
        throw new Error("Password not found");
    }

    const deletedPassword = await Password.findByIdAndDelete(req.params.id);
    
    res.status(200).json(deletedPassword);
});





module.exports = {getPasswords, createPassword,getPassword, updatePassword, deletePassword};