const express = require('express');
const { transfersPost } = require('../controller/transferControllers');

const router = express.Router();


router.post('/', transfersPost)


module.exports = { transfersRoutes: router }