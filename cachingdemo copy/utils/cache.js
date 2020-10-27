const { json } = require('body-parser');
const redis = require('redis');
const {CACHE_SERVER_IP, CACHE_SERVER_PORT, SINGER_CACHE_KEY} = require('./constants');
let client = redis.createClient({
    host:CACHE_SERVER_IP,
    port :CACHE_SERVER_PORT
});
const redisOperations = {
    setData:(key, jsonString)=>{
        client.set(key,JSON.stringify(jsonString));
    },
    getData:(key)=>{
        const promise = new Promise((resolve, reject)=>{
            client.get(key,(err,result)=>{
                if(err){
                       reject(err);
                }
                else  {
                    if(result){
                        resolve(result);
                    }
                    else{
                        reject('No Data Found in Cache with this Key '+key);
                    }
                }
           });
        });
        return promise;

    },
    checkAndFetchFromCache:(request, response,next)=>{
        if(request.url.endsWith('/singers')){
           const promise = redisOperations.getData(SINGER_CACHE_KEY);
           promise.then(data=>{
               console.log('Data Coming From Cache');
               response.send(data);
           }).catch(err=>{
               console.log('Not Coming from Cache ',err);
               next();
           });
        }
    }

}
module.exports = redisOperations;
