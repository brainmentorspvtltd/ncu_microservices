const express = require('express');
const route = express.Router();
route.get('/service2get/:name',async (request, response)=>{
    const axios = require('axios');
    let result = await axios.get('http://localhost:1234/service1get/Ram');
    //result =  JSON.parse(result);
    console.log('Result is ',result);
    let name = request.params.name;
    response.status(200).json({message:'I am in Service2 Route '+result.data.message +" " +name+" "});
});
module.exports = route;