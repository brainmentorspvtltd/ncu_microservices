const route = require('express').Router();
route.get('/hello',(req,res)=>{
    let num = req.query.num;
    const logic = require('../helpers/logic');
    let result = logic(num);
    let argvalue = process.argv[2];

    console.log('Process ARGS IS ',process.argv);
    console.log('Result is ',result, 'Args Value is ',argvalue);
    res.send(result + " ARGS "+argvalue);
});
module.exports = route;