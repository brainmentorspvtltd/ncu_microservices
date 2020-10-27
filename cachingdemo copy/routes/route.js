const express = require('express');
const route = express.Router();
const apiCall = require('../utils/apicall');
const redisOperations = require('../utils/cache');
const {SINGER_URL, SINGER_CACHE_KEY} = require('../utils/constants');
route.use(redisOperations.checkAndFetchFromCache);
route.get('/singers',(request, response)=>{
    console.log('API CALL FROM NETWORK');
    const promise = apiCall(SINGER_URL);
    promise.then(res=>{
        res.json().then(data=>{
            redisOperations.setData(SINGER_CACHE_KEY,data);
            response.json(data);
        }).catch(err=>{
            response.json({'err':err});
        });
    }).catch(err=>{
        response.json({'err':err});
    })
})
module.exports = route;