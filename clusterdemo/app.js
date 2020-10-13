
const os = require('os');
const cluster = require('cluster');
const cores = os.cpus().length;

if(cluster.isMaster){
    console.log(cluster.isMaster, 'Master , these cores u have ',cores);
    for(let i = 1; i<=cores; i++){
        cluster.fork();
        console.log('Fork for '+i+ ' Cores....');
    }
    cluster.on('online',worker=>{
        console.log('Worker is Now Active ',worker.id, ' Process ',worker.process.id);
    });
    cluster.on('exit',worker=>{
        console.log('Good Bye Worker ',worker.id , ' Process id ',worker.process.id);
    });
}
else{
    console.log('Server request .....');
    const express = require('express');
const app = express();
    const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/',require('./routes/myroute'));
const server = app.listen(process.env.PORT || 1234,()=>{
    console.log("Server Started... ",server.address().port);
})
}
console.log(process.env.UV_THREADPOOL_SIZE);