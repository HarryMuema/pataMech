const express = require('express')

const router=express.Router()

const { tryCatch } = require('../helpers')
const { signup,signupPage2, signupPageDriver, signupPageCenters } = require('../controllers/signUpHandler')
const { signin } = require('../controllers/signInHandler')
const { getalldealer } = require('../controllers/dealersHandler')
const authenticateToken = require('../middlewares/auth')
const { onlydealer } = require('../controllers/getDetailsHandler')


router.post('/signup',tryCatch(signup))
router.post('/signup/details',tryCatch(signupPage2))
router.post('/signup/details/driver',tryCatch(signupPageDriver))
router.post('/signup/details/center',tryCatch(signupPageCenters))
router.post('/signin', tryCatch(signin))
router.get('/dealers',[authenticateToken],tryCatch(onlydealer))

module.exports=router