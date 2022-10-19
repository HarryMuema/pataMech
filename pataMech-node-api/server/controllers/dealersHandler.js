const passport = require('passport')
const db=require('../database/db')

require('../middlewares/passport')

module.exports={
    getalldealer:passport.authenticate('jwt',{session:false}), async(req,res){
        return res.status(200).send({
            user:{
                "user_id":req.user_id,
                "email":req.email,
                "role_id":req.role_id
            },
            message:"Logged in successfully"
        })
    }   
    
}