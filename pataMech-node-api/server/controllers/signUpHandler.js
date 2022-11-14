const db= require('../database/db')
const bcrypt=require('bcrypt')
const passport=require('passport')

const { signUpEmailValidation, signUpDetails1Validation, signUpDetails2Validation, signUpDetails2Validationcenters } = require('../validation/signUpvalidation')

module.exports={
    signup:async(req,res)=>{
        try {
            const bodyerror=signUpEmailValidation(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})
            
            //validating if a new user
            const {email, password,role}=await req.body
            let result=await db('users').select('email')
                                    .from('users');
            if (result==email) return res.send({errored:true,error:"User already exists"}).status(403)

            const hashedpassword=await bcrypt.hash(password,10)

            // choosing the role
            let roleId

            if (role=='agent'){
                roleId=7
                
                const userId=await db('users').returning('user_Id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_Id:roleId
                })
                const payload={
                    userId:userId[0].user_Id,
                    role:roleId
                }
                
                res.status(200).json({payload:payload,message:"Agent created"})
            }

            if (role=='tow service'){
                roleId=6
                
                const userId=await db('users').returning('user_Id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_Id:roleId
                })
                const payload={
                    userId:userId[0].user_Id,
                    role:roleId
                }
                res.status(200).json({payload:payload,message:"Tow service created"})
            }

            if (role=='mechanic'){
                roleId=5
                
                const userId=await db('users').returning('user_Id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_Id:roleId
                })
                const payload={
                    userId:userId[0].user_Id,
                    role:roleId
                }
                
                res.status(200).json({payload:payload,message:"Mechanic created"})
            }

            if (role=='admin'){
                roleId=4

                const userId=await db('users').returning('user_Id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_Id:roleId
                })
                const payload={
                    userId:userId[0].user_Id,
                    role:roleId
                }
                res.status(200).json({payload:payload,message:"Admin created"})
            }

            if (role=='service center'){
                roleId=3
                
                const userId=await db('users').returning('user_Id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_Id:roleId
                })
                const payload={
                    userId:userId[0].user_Id,
                    role:roleId
                }
                res.status(200).json({payload:payload,message:"Service station created"})
            }
            
            if (role=='parts dealer'){
                roleId=2
                
                const userId=await db('users').returning('user_Id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_Id:roleId
                })
                const payload={
                    userId:userId[0].user_Id,
                    role:roleId
                }

                res.status(200).json({payload:payload,message:"Part dealer created"})

            }
            
            if (role=='driver'){
                roleId=1
                
                const userId=await db('users').returning('user_Id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_Id:roleId
                })

                const payload={
                    userId:userId[0].user_Id,
                    role:roleId
                }
                res.status(200).json({payload:payload,message:"Driver created"})
            }

        } catch (error) {
            res.json({errored:error.detail,error:"Internal server error",}).status(500)
        }
    },
    signupPage2:async(req,res)=>{
        try {
            const bodyerror=signUpDetails1Validation(req.body).error
            if (bodyerror) return res.send({errored:bodyerror.details[0].message,error:"Something went wrong"}).status(400)
            
            const{phonenumber,altphonenumber,firstname,lastname,userId,username}=await req.body

            //add to database
           const contactId=await db('contacts').returning('contact_Id')
            .insert({
               phone_number:phonenumber,
               alt_phone_number:altphonenumber,
           })

            //update database
            await db('users').where({'user_Id':userId})
            .update({
                first_Name:firstname,
                last_Name:lastname,
                user_Name:username,
                contact_Id:contactId[0].contact_Id,
            },["first_Name","last_Name","user_Name","contact_Id"])

            res.status(200).json({id:userId,message:"Names added"})

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    },
    signupPageDriver:async(req,res)=>{
        try {
            const bodyerror=signUpDetails2Validation(req.body).error
            if (bodyerror) return res.send({errored:bodyerror.details[0].message,error:"Something went wrong"}).status(400)
            
            const {address1,address2,carmodel,carmake,carmodelyear,carplatenumber,userId}=await req.body
        
            //add to database
            const carId=await db('drivercar').returning('driver_Car_Id')
            .insert({
                user_Id:userId,
                car_Make:carmake,
                car_Model:carmodel,
                reg_Number:carplatenumber,
                model_Year:carmodelyear,
            })
            
            //add to database
            const addressId=await db('address').returning('address_Id')
            .insert({
                address_1:address1,
                address_2:address2,
            })

            await db('users').where({'user_Id':userId})
            .update({
                address_Id:addressId[0].address_Id,
            },["address_Id"])

        const da=await db('users').where({'user_Id':userId})
        const response={
            "username":da[0].user_Name,
            "email":da[0].email,
            "password":da[0].password,
            "roleId":da[0].role_Id
        }

            res.json({data:response,message:"Driver details added"}).status(200)

        } catch (error) {
            res.json({errored:error.detail,error:"Internal server error"}).status(500)
        }
    },
    signupPageCenters:async(req,res)=>{
        try {
            const bodyerror=signUpDetails2Validationcenters(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})
            
            const {address1,address2,town,county,postalcode,telephone,userId}=await req.body

            //add to database
            const addressId=await db('address').returning('address_Id')
            .insert({
                address_1:address1,
                address_2:address2,
                town_Name:town,
                county_Name:county,
            })

            await db('users').where({'user_Id':userId})
            .update({
                address_Id:addressId[0].address_Id,
            },["address_Id"])

            const contactId=await db('users').where({'user_Id':userId})
            
            //update database
            await db('contacts').where({'contact_Id':contactId[0].contact_Id})
            .update({
                postal_code:postalcode,
                telephone,
            },["postal_code","telephone"])
            
            const da=await db('users').where({'user_Id':userId})
            const response={
                "username":da[0].user_Name,
                "email":da[0].email,
                "password":da[0].password,
                "roleId":da[0].role_Id
            }

            res.status(200).json({data:response,message:"Center details added"})

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    },
   
  
}