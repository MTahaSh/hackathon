const User = require("../models/user")

async function getAllUsers(req, res){
    const userData = await User.find({});
    res.json(userData)
}


async function getUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({message:"User not found"});

    return res.json(user);
}



async function updateUserById (req, res)
{
    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"});
    return res.json({status: "success"});
}


async function deleteUserById (req, res)
{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "success"});
}


async function createUser(req,res){
    const body = req.body;
    
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.password)
    {
        return res.status(400).json({messsge:"All fields are required"})
    }

    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        password:body.password
    })

    console.log(result);

    return res.status(201).json({
        success:true,})




}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}