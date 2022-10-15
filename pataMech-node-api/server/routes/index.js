const express = require('express')

const router=express.Router()

const { createUser } = require('../controllers/centersHandler')
const { signup,signupPage2 } = require('../controllers/signUpHandler')
const { tryCatch } = require('../helpers')

router.post('/signup',tryCatch(signup))
router.post('/signup/details1',tryCatch(signupPage2))
router.post('/newcenters', tryCatch(createUser))
// router.get("/centers", tryCatch(allCentersHandler));
// router.get("/centers/:id", tryCatch(centerHandler));
// router.get("/dealers", tryCatch(allDealersHandler));
// router.get("/dealers/:id", tryCatch(dealersHandler));

module.exports=router