const joi=require('joi')

module.exports={
    signUpEmailValidation:(user)=>{
        const schema=joi.object({
            email:joi.string().email().required(),
            password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            role:joi.string().required()
        })
        return schema.validate(user)
    },
    signUpDetails1Validation:(data)=>{
        const schema=joi.object({
            firstname:joi.string().alphanum().min(3).max(30).required(),
            lastname:joi.string().alphanum().min(3).max(30).required(),
            username:joi.string().alphanum().min(3).max(30).required(),
            phonenumber:joi.number().integer().required(),
            altphonenumber:joi.number().integer(),
            userId:joi.number().integer(),
        })
        return schema.validate(data)
    },
    signUpDetails2Validation:(data)=>{
        const schema=joi.object({
            address1:joi.string().min(3),
            address2:joi.string().min(3),
            carmodel:joi.string().min(4),
            carmake:joi.string().min(3).required(),
            carplatenumber:joi.string().min(5),
            carmodelyear:joi.number().integer().min(4),
            userId:joi.number().integer(),
        })
        return schema.validate(data)
    },
    signUpDetails2Validationcenters:(data)=>{
        const schema=joi.object({
            address1:joi.string().min(3),
            address2:joi.string().min(3),
            town:joi.string().required(),
            county:joi.string().required(),
            postalcode:joi.string().min(3),
            telephone:joi.number().integer(),
            userId:joi.number().integer(),
        })
        return schema.validate(data)
    }
}