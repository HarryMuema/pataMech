const express = require('express')

const router=express.Router()

const { createUser } = require('../controllers/centersHandler')
const { tryCatch } = require('../helpers')

router.post('/newcenters', tryCatch(createUser))
// router.get("/centers", tryCatch(allCentersHandler));
// router.get("/centers/:id", tryCatch(centerHandler));
// router.get("/dealers", tryCatch(allDealersHandler));
// router.get("/dealers/:id", tryCatch(dealersHandler));

module.exports=router