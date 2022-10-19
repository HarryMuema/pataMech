const bcrypt=require('bcrypt')

module.exports={
    tryCatch:(fn)=>(req,res,next)=>{
        Promise.resolve(fn(req,res,next)).catch(next)
    },
    hashpassword:async(password)=>{
        const hashedpassword=await bcrypt.hash(password,10)

        return hashedpassword
    }
}