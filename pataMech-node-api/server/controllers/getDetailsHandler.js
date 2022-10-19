

module.exports={
    onlydealer:async(req,res)=>{
        res.send(req.user.email)
    }
}