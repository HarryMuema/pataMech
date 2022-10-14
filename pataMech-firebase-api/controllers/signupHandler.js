const user= require('../config')


module.exports={
    createUser:async(req,res)=>{
        const data=req.body
        await user.add(data)
        res.send({msg:"user added"})
    }
}