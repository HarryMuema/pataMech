const joi=require('joi')

module.exports={
    signUpValidation:(user)=>{
        const schema=joi.object({
            firstname:joi.string().alphanum().min(3).max(30).required(),
            lastname:joi.string().alphanum().min(3).max(30).required(),
            email:joi.string().email().required(),
            password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        })
    },
}