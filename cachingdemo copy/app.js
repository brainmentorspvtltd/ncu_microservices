const express = require('express');
const app = express();
app.use('/',require('./routes/route'));
const server = app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Started ',server.address().port);
})