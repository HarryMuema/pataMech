const express = require('express')
const app = express()
const cors=require('cors')
const router= require('./routes');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use("/api/v1",router)


//port
const port=process.env.PORT||9000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})