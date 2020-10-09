const express = require('express');
const route = express.Router();
route.get('/service1get/:name',(request, response)=>{
    let name = request.params.name;
    response.setHeader("Content-Type", "application/json");
    response.status(200).json({message:'I am in Service1 Route '+name});
});
module.exports = route;