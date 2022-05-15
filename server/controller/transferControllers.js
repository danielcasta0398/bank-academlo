const { Transfer } = require("../model/transferModel");
const { User } = require("../model/userModel");
const { AppError } = require("../utils/appError");
const { catchAsync } = require("../utils/cathAsync");


const transfersPost = catchAsync(async (req,res,next) => {
    
    const { amount, accountNumberReceptor, accountNumberUser } = req.body;
    const { id: idUser , amount: amountUser } = await User.findOne( {where: { accountNumber: accountNumberUser }} );   
    const accountReceptor = await User.findOne( {where: { accountNumber: accountNumberReceptor }} );    
    
    // Verify that the recipient's account exists
    if (!accountReceptor) {
        return next( new AppError('Numero de cuenta del destinatario es invalida o no existe', 404) )
    }       
    // Check if there is a balance
    if (amountUser <= amount) {
        return next( new AppError('No cuentas con saldo suficiente para la transaccion', 404) )
    }

    const { id:idReceptor, amount: amountReceptor } = accountReceptor

    await User.update( {amount: (amountUser - amount )}, {where : { id:idUser}} )
    await User.update( {amount: (amountReceptor + amount )}, {where : { id:idReceptor}} )   
    
    
    const newTransfer = await Transfer.create(
        {
            amount,
            senderUserId: idUser,
            receiverUserId: idReceptor
        }
    )  


    res.status(200).json({ newTransfer })
})

const getTransfer = catchAsync( async (req,res,next) => {

    const {id} = req.params;  

    const usersHaveTransfer = await Transfer.findOne( { where: {senderUserId : id} } )

    if (!usersHaveTransfer) {
        return next(new AppError('No tienes transacciones', 403))
    }  
    
    const transferHistory = await Transfer.findAll({ where: {senderUserId : id} })
    
    res.status(200).json({ transferHistory })
} )

module.exports = { transfersPost, getTransfer }