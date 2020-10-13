const express = require('express');
const route = express.Router();
route.get('/server3',(req,res)=>{
    res.json({message:'I am the Server3'});
});
module.exports = route;