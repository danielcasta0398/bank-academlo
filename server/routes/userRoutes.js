const express = require('express');
const { createUser, getUsers, getTransfer } = require('../controller/userController');
const { userExists } = require('../middlewares/usersMiddlewares');



const router = express.Router();


router.get('/', getUsers)
router.post('/signup', createUser)
router.post('/login', userExists)



module.exports = { userRoutes: router }