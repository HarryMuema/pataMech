const db=require('../database/db')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
require('dotenv').config()
const { signInValidation } = require('../validation/signInValidation')

module.exports={
    signin:async(req,res)=>{
        try {
            const bodyerror=signInValidation(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})

            //validagting if user exists
            const {email,password}=await req.body
            let result=await db('users').where({email})
            if (result.length==0) return res.status(403).send({errored:true,error:"User does not exist"})
            const validpassword=await bcrypt.compare(password,result[0].password) 
            
            if(!validpassword){return res.status(400).send({errored:err,error:"Invalid password"})}

            const payload={
                "User_id":result[0].user_id, 
                'email':result[0].email,
                "role_id":result[0].role_id,
            }

            const token=jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1d"})

            return res.status(200).send({token:"Bearer "+token,message:"Logged in successfully"})

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    }
}