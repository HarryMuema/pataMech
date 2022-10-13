const express = require('express')

const router=express.Router()

const db= require('../database/db')

const create=async(req,res)=>{
    try {
        const {firstName,lastName,email,password,id}=await req.body
            const user=await db('users').insert({
                user_id:id,
                first_name:firstName,
                last_name:lastName,
                email,
                password,
            });
        const responce=firstName+" "+lastName+" "+"created successfully"    
        res.status(200).json(responce)
    } catch (error) {
        res.status(500).json({ errored:error.detail ,error:"internal server error" });
    }
}

router.post('/newcenters', create )
// router.get("/centers", tryCatch(allCentersHandler));
// router.get("/centers/:id", tryCatch(centerHandler));
// router.get("/dealers", tryCatch(allDealersHandler));
// router.get("/dealers/:id", tryCatch(dealersHandler));

module.exports=router