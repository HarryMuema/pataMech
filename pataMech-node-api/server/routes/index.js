const express = require('express')

const router=express.Router()

const { createUser } = require('../controllers/centersHandler')
const { signup,signupPage2, signupPageDriver, signupPageCenters } = require('../controllers/signUpHandler')
const { tryCatch } = require('../helpers')

router.post('/signup',tryCatch(signup))
router.post('/signup/details',tryCatch(signupPage2))
router.post('/signup/details/driver',tryCatch(signupPageDriver))
router.post('/signup/details/center',tryCatch(signupPageCenters))

module.exports=router