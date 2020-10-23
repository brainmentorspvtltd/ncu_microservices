const express = require('express');
const route = express.Router();
const logic = require('../helpers/logic');
route.get('/',(req, res)=>{
    let result =logic(req.query.num);
    res.send('Server Send the response '+result);
});
module.exports = route;