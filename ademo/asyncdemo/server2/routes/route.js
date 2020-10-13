const express = require('express');
const route = express.Router();
route.get('/server2',(req,res)=>{
    console.log('I am in Server2 ');
    res.json({message:'I am the Server2'});
});
module.exports = route;