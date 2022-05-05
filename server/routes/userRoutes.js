const express = require('express');
const { createUser, getUsers } = require('../controller/userController');



const router = express.Router();


router.get('/', getUsers)
router.post('/', createUser)


module.exports = { userRoutes: router }