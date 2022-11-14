const db=require('../database/db')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
require('dotenv').config()
const { signInValidation } = require('../validation/signInValidation')

module.exports={
    signin:async(req,res)=>{
        try {
            const bodyerror=signInValidation(req.body).error
            if (bodyerror) return res.send({error:bodyerror.details[0].message,errored:"Something went wrong"}).status(400)

            //validagting if user exists
            const {email,password}=await req.body
            let result=await db('users').where({email})
            if (result.length==0) return res.send({errored:true,error:"User does not exist"}).status(403)
            const validpassword=await bcrypt.compare(password,result[0].password)
            
            
            if(validpassword==false){return res.send({errored:true,error:"Invalid password"}).status(400)}

            const payload={
                "User_Id":result[0].user_Id, 
                'email':result[0].email,
                "role_Id":result[0].role_Id,
                "username":result[0].user_Name
            }

            const token=jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1d"})

            return res.status(200).send({token:"Bearer "+token,payload:payload,message:"Logged in successfully"})

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    }
}