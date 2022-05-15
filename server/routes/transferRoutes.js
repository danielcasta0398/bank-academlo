const express = require('express');
const { transfersPost, getTransfer } = require('../controller/transferControllers');


const router = express.Router();


router.post('/', transfersPost)
router.get('/:id/history', getTransfer )


module.exports = { transfersRoutes: router }