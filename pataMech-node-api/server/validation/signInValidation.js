const joi=require('joi')

module.exports={
    signInValidation:(user)=>{
        const schema=joi.object({
            email:joi.string().email().required(),
            password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        })
        return schema.validate(user)
    },
}