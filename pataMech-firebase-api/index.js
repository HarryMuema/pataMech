const express = require('express')
const app = express()
const cors=require('cors')
const user= require('./config')

//middleware
app.use(cors());
app.use(express.json());


//Routes
app.post("/create",async(req,res)=>{
    const data=req.body
    await user.add(data)
    res.send({msg:"user added"})
})

//port
const port=process.env.PORT||9005
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})