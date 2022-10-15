const db= require('../database/db')
const { signUpEmailValidation, signUpDetails1Validation } = require('../validation/signUpvalidation')

module.exports={
    signup:async(req,res)=>{
        try {
            const bodyerror=signUpEmailValidation(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})

            //validating if a new user
            const {email, password,role}=await req.body
            let result=await db('user').select('email')
                                    .from('user');
            if (result==email) return res.status(403).send({errored:true,error:"User already exists"})
            
            //choosing the role
            let roleId
            if (role=='admin'){roleId=4}
            if (role=='service center'){roleId=3}
            if (role=='parts dealer'){roleId=2}
            if (role=='driver'){roleId=1}

            //add to database
            await db('user').insert({
                email,
                password,
                role_id:roleId
            })

            //get the userid
            const userId=await db('user').where({email}).select('user_id')
            return userId
        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error",})
        }
    },
    signupPage2:async(req,res)=>{
        try {
            const bodyerror=signUpDetails1Validation(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})
            
            const{phonenumber,firstname,lastname}=await req.body

            res.send(userId)

            //add to database
            // await db('user').where({user_id:userId})
            // .update({
            //     first_name:firstname,
            //     last_name:lastname
            // },['user_id',"first_name","last_name"])
            
            await db('contacts').insert({
                phone_number:phonenumber
            })
            
            //get the phoneid
            const phoneId=await db('contacts').where({phone_number:phonenumber}).select('phone_id')
            module.exports=phoneId
        } catch (error) {
            
        }
    },
}