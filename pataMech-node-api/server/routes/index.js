const express = require('express')

const router=express.Router()

const { tryCatch } = require('../helpers')
const { signup,signupPage2, signupPageDriver, signupPageCenters } = require('../controllers/signUpHandler')
const { signin } = require('../controllers/signInHandler')

router.post('/signup',tryCatch(signup))
router.post('/signup/details',tryCatch(signupPage2))
router.post('/signup/details/driver',tryCatch(signupPageDriver))
router.post('/signup/details/center',tryCatch(signupPageCenters))
router.post('/signin', tryCatch(signin))

module.exports=router