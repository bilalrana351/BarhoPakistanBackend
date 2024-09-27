const express = require('express')
const router = express.Router()
const loginController = require('../../controllers/auth/loginController')
const validateLogin = require('../../middlewares/auth/loginValidator')

router.post('/auth/login', validateLogin, loginController);

module.exports = router;