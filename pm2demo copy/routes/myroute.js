const express = require('express');
const route = express.Router();
route.get('/logic',(req, res)=>{
 const logic = require('../helper/logic');
 let num = req.query.num;
 let result = logic(num);
 res.send('Now Result is '+result);
});
module.exports = route;