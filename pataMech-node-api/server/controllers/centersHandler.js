const db= require('../database/db')

module.exports={
    createUser:async(req,res)=>{
        try {
            res.send("userId")
            const {firstName,lastName,email,password,id}=await req.body
                const user=await db('users').insert({
                    user_id:id,
                    first_name:firstName,
                    last_name:lastName,
                    email,
                    password,
                });
            const responce=firstName+" "+lastName+" "+"created successfully"    
            res.status(200).json(responce)
        } catch (error) {
            res.status(500).json({ errored:error.detail ,error:"internal server error" });
        }
    },
}