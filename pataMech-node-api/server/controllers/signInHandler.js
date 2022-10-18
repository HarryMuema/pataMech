const db=require('../database/db')
const { signInValidation } = require('../validation/signInValidation')

module.exports={
    signin:async(req,res)=>{
        try {
            const bodyerror=signInValidation(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})

            //validagting if user exists
            const {email,password}=await req.body
            let result=await db('users').select('email').from('users')
            if (!(result==email)) return res.status(403).send({errored:true,error:"User does not exists"})
            res.send(result)


        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    }
}