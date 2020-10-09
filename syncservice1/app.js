const express = require('express');
const app = express();
app.use(require('cors'));
app.use('/',require('./routes/service1'));
const server = app.listen(process.env.PORT || 1234, ()=>{
    console.log('Server Started...', server.address().port);
})