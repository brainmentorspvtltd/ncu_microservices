const express = require('express');
const route = express.Router();
route.get('/server1',(req,res)=>{
    console.log('I am in Server 1');
    res.json({message:'I am the Server1'});
});
module.exports = route;