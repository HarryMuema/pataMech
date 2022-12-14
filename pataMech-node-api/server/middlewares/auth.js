const jwt= require('jsonwebtoken')
require('dotenv').config()

function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization']
    const token=authHeader &&authHeader.split(' ')[1]
    
    if(token==null)return res.status(401).send({message:"Access denied. No Authorization provided"})

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
        if(error) return res.status(403).send({message:"Forbidden : you do not have access to this page"})
        req.user=user
        next()
    })
}

module.exports=authenticateToken