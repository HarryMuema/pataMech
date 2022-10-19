const db= require('../database/db')
const bcrypt=require('bcrypt')
const passport=require('passport')

const initializePassport=require('../helpers/passport-config')
initializePassport(passport)

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
            if (result==email) return res.status(403).send({errored:true,error:"User already exists"})

            const hashedpassword=await bcrypt.hash(password,10)

            // choosing the role
            let roleId

            if (role=='agent'){
                roleId=7
                
                const userId=await db('users').returning('user_id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_id:roleId
                })
                
                //add to other tables
                const agentId=await db('insuranceagent').returning('agent_id')
                .insert({
                    user_id:userId[0].user_id
                })

                 //add to other tables
                 const centerId=await db('servicestation').returning('center_id')
                 .insert({
                     user_id:userId[0].user_id
                 })

                res.status(200).json({message:"Agent created"})
                return agentId

            }

            if (role=='tow service'){
                roleId=6
                
                const userId=await db('users').returning('user_id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_id:roleId
                })
                
                //add to other tables
                const towId=await db('towservice').returning('tow_id')
                .insert({
                    user_id:userId[0].user_id
                })

                //add to other tables
                const centerId=await db('servicestation').returning('center_id')
                .insert({
                    user_id:userId[0].user_id
                })

                res.status(200).json({message:"Tow service created"})
                return towId

            }

            if (role=='mechanic'){
                roleId=5
                
                const userId=await db('users').returning('user_id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_id:roleId
                })
                
                //add to other tables
                const mechanicId=await db('mechanic').returning('mechanic_id')
                .insert({
                    user_id:userId[0].user_id
                })

                //add to other tables
                const centerId=await db('servicestation').returning('center_id')
                .insert({
                    user_id:userId[0].user_id
                })

                res.status(200).json({message:"Mechanic created"})
                return mechanicId

            }

            if (role=='admin'){
                roleId=4

                await db('users').insert({
                    email,
                    password:hashedpassword,
                    role_id:roleId
                })

                res.status(200).json({message:"Admin created"})

            }

            if (role=='service center'){
                roleId=3
                
                const userId=await db('users').returning('user_id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_id:roleId
                })
                
                //add to other tables
                const centerId=await db('servicestation').returning('center_id')
                .insert({
                    user_id:userId[0].user_id
                })

                res.status(200).json({message:"Service station created"})
                return centerId

            }
            
            if (role=='parts dealer'){
                roleId=2
                
                const userId=await db('users').returning('user_id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_id:roleId
                })

                //add to other tables
                const dealerId=await db('partdealer').returning('dealer_id')
                .insert({
                    user_id:userId[0].user_id
                })

                res.status(200).json({message:"Part dealer created"})
                return dealerId

            }
            
            if (role=='driver'){
                roleId=1
                
                const userId=await db('users').returning('user_id')
                .insert({
                    email,
                    password:hashedpassword,
                    role_id:roleId
                })

                //add to other tables
                const driverId=await db('driver').returning('driver_id')
                .insert({
                    user_id:userId[0].user_id
                })

                res.status(200).json({message:"Driver created"})
                return driverId
        
            }
            res.send(driverId)

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error",})
        }
    },
    signupPage2:async(req,res)=>{
        try {
            const bodyerror=signUpDetails1Validation(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})
            
            const{phonenumber,altphonenumber,firstname,lastname,userid}=await req.body

            //update database
            await db('users').where({'user_id':userid})
            .update({
                first_name:firstname,
                last_name:lastname,
            },["first_name","last_name"])

             //add to database
            const phoneId=await db('contacts').returning('phone_id')
             .insert({
                phone_no:phonenumber,
                alt_phone_number:altphonenumber,
            })

            const roleId=await db('users').where({'user_id':userid}).select('role_id') 

            if(roleId[0].role_id==1){
                //update database
                await db('driver').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])
            }

            if(roleId[0].role_id==2){
                //update database
                await db('partdealer').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])
            }

            if(roleId[0].role_id==3){
                //update database
                await db('servicestation').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])
            }

            if(roleId[0].role_id==5){
                //update database
                await db('servicestation').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])

                //update database
                await db('mechanic').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])
            }

            if(roleId[0].role_id==6){
                //update database
                await db('servicestation').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])

                //update database
                await db('towservice').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])
            }

            if(roleId[0].role_id==7){
                //update database
                await db('insuranceagent').where({'user_id':userid})
                .update({
                    phone_id:phoneId[0].phone_id,
                },["phone_id"])
            }
             
            res.status(200).json({message:"Names added"})

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    },
    signupPageDriver:async(req,res)=>{
        try {
            const bodyerror=signUpDetails2Validation(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})
            
            const {address1,address2,carmodel,carmake,carmodelyear,carplatenumber,userid}=await req.body

            //add to database
            const carId=await db('drivercar').returning('driver_car_id')
            .insert({
                car_make:carmake,
                car_model:carmodel,
                plate_no:carplatenumber,
                model_year:carmodelyear,
            })

            //add to database
            const addressId=await db('address').returning('address_id')
            .insert({
                address_1:address1,
                address_2:address2,
            })

            await db('driver').where({'user_id':userid})
            .update({
                address_id:addressId[0].address_id,
                driver_car_id:carId[0].driver_car_id,
            },["address_id","driver_car_id"])

            res.status(200).json({message:"Driver details added"})

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    },
    signupPageCenters:async(req,res)=>{
        try {
            const bodyerror=signUpDetails2Validationcenters(req.body).error
            if (bodyerror) return res.status(400).send({errored:bodyerror.details[0].message,error:"Something went wrong"})
            
            const {address1,address2,centername,town,county,postalcode,telephone,userid}=await req.body

             //add to database
            const townId=await db('town').returning('town_id')
             .insert({
                town,
                county,
            })

            //add to database
            const addressId=await db('address').returning('address_id')
            .insert({
                address_1:address1,
                address_2:address2,
            })

            //add to database
            const roleId=await db('users').where({'user_id':userid}).select('role_id') 

            if(roleId[0].role_id==2){
                await db('partdealer').returning('dealer_id').where({'user_id':userid})
                .update({
                    town_id:townId[0].town_id,
                    dealer_name:centername,
                    address_id:addressId[0].address_id,
                },["dealer_name","town_id","address_id"])
            }

            if(roleId[0].role_id==3){
                await db('servicestation').returning('center_id').where({'user_id':userid})
                .update({
                    town_id:townId[0].town_id,
                    center_name:centername,
                    address_id:addressId[0].address_id,
                },["center_name","address_id","town_id"])
            }

            if(roleId[0].role_id==5){
                await db('servicestation').returning('center_id').where({'user_id':userid})
                .update({
                   center_name:centername,
                },["center_name"])

                const centerId=await db('servicestation').where({'user_id':userid}).select('center_id')

                res.send(centerId)
                //update database
                const mechanicId=await db('mechanic').returning('mechanic_id').where({'user_id':userid})
                .update({
                    center_id:centerId[0].center_id,
                },["center_id"])
            }

            if(roleId[0].role_id==6){
                await db('servicestation').returning('center_id').where({'user_id':userid})
                .update({
                   center_name:centername,
                },["center_name"])

                const centerId=await db('servicestation').where({'user_id':userid}).select('center_id')

                //update database
                const towId=await db('towservice').returning('tow_id').where({'user_id':userid})
                .update({
                    center_id:centerId[0].center_id,
                },["center_id"])
            }
            
            const phoneId=roleId[0].role_id==2?await db('partdealer').where({'user_id':userid}).select('phone_id'):await db('servicestation').where({'user_id':userid}).select('phone_id')

             //update database
            await db('contacts').where({'phone_id':phoneId[0].phone_id})
            .update({
                postal_code:postalcode,
                telephone,
            },["postal_code","telephone"])

            res.status(200).json({message:"Center details added"})

        } catch (error) {
            res.status(500).json({errored:error.detail,error:"Internal server error"})
        }
    },
   
  
}