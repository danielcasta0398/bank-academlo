const { Transfer } = require("../model/transferModel");
const { catchAsync } = require("../utils/cathAsync");


const transfersPost = catchAsync(async (req,res,next) => {
    
    const { amount, senderUserId, receiverUserId } = req.body;

    const newTransfer = await Transfer.create(
        {
            amount,
            senderUserId,
            receiverUserId
        }
    )

    res.status(200).json({ newTransfer })
})

module.exports = { transfersPost }