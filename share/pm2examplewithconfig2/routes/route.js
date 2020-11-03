const route = require('express').Router();
route.get('/hello',(req,res)=>{
    let num = req.query.num;
    const logic = require('../helpers/logic');
    let result = logic(num);
    let argvalue = process.argv[2];
    console.log('Result is ',result);
    res.send("RESULT :::::: "+result +" ARGS "+argvalue);
});
route.get('/hi',(req,res)=>{
    let argvalue = process.argv[0];
    console.log('Server2 ArgValue is ',argvalue);
    res.send('Hi Server2 '+argvalue);
})
module.exports = route;