const express = require('express');
const route = express.Router();
const axios = require('axios');
const url = require('../utils/url');
route.get('/event3',async (req,res)=>{
    console.log('I am in Event Bus ');
    //res.send('Hello I am Event Bus');
    try{
    const response =  await axios.get(url.SERVER1);
    const response2 =  await axios.get(url.SERVER2);
    console.log(response.data.message);
    console.log(response2.data.message);
    res.json({message:'I am the EventBus  ::: '+response.data.message +'  :::  ' + response2.data.message });
    }
    catch(e){
        console.log('SOme Problem in Event Bus ',e);
        res.json({message:'Event Bus Fail'});
    }
});
module.exports = route;