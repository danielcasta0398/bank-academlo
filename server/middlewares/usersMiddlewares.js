const { User } = require("../model/userModel");
const { catchAsync } = require("../utils/cathAsync");



const userExists = catchAsync( async (req,res,next) =>{
    
    const { accountNumber, password } = req.body;

    const user = await User.findOne( {where: {accountNumber}} )


    if (!user) {
        return res.status(400).json({ message : 'User or password incorrect ' })
    }

    const passwordCorrect = await User.findOne ( {where: {password}} )

    if(!passwordCorrect){
        return res.status(400).json( {message : 'user or password incorrect'} )
    }

    res.status(200).json( {user} )

} )

module.exports = { userExists }