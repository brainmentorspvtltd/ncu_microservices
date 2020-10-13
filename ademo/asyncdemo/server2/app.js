const express = require('express');
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(require('cors')());
app.use('/',require('./routes/route'));
const server = app.listen(process.env.PORT || 2222,()=>{
    console.log('Server Started....', server.address().port);
})