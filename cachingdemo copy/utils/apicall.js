const fetch = require('node-fetch');

function getDataFromNetwork(url){
    return fetch(url);
}
module.exports = getDataFromNetwork;