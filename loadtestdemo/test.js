const loadTestObj = require('loadtest');
const options = {
    url: 'http://localhost:4321/show',
    maxRequests: 1000,
    rps:200,
    concurrency:100,
    method:'POST',
    "contentType":'application/json',
    body:{"name":'Ram',"age":20000},
    statusCallback: myCallBack
};
function myCallBack(error, result, latency){
console.log("Result ",result, " latency  ",latency);
}
loadTestObj.loadTest(options, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully ',result);
});