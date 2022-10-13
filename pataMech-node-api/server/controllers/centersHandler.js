const db= require('../database/db')

const createCenter=async(req,res)=>{
    try {
        const {firstName,lastName,email,password}=await req.body
            const user=await db('users').insert({
                first_name:firstName,
                last_name:lastName,
                email,
                password,
            });
        res.send(user)
    } catch (error) {
        res.status(500).json({ errored:error,error:"internal server error" });
        console.log(error)
    }
}

module.exports={
    createCenter
}