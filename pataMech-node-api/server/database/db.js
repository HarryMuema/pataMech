// const Pool =  require("pg").Pool

// const pool=new Pool({
//     user:"postgres",
//     password: "harrisonmuema",
//     host:"localhost",
//     port:5432,
//     database:"patamech"
// });

// module.exports=pool;
const knex=require('knex')
const knexfile=require('./knexfile')

const db=knex(knexfile.development)

module.exports=db