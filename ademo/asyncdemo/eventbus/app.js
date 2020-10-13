const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use('/',require('./routes/eroute'));
const server = app.listen(process.env.PORT || 4444,()=>{
    console.log('Server Started....', server.address().port);
})