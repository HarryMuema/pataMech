const express = require('express')

const router=express.Router()

const { signin } = require('../controllers/signInHandler')
const { tryCatch } = require('../helpers')

router.post('/signin', tryCatch(signin))

module.exports=router