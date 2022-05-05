const { User } = require("../model/userModel");


const getUsers = async (req,res) =>{
    const users = await User.findAll()

    res.status(200).json({users})
}

const createUser = async (req,res) =>{
    const { name,password, } = req.body;    
    
    const accountNumber = parseInt('4880'+Math.floor(Math.random()*1235479 - 1))


    const newUser = await User.create({
        name,
        accountNumber,
        password,
    })

    res.status(200).json({ newUser })
}

module.exports = { createUser, getUsers }