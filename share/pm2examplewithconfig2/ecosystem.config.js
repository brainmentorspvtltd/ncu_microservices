module.exports = {
  apps : [{
    name:'My Express App Two ',
    script: 'app.js',
    watch: '.',
    instances:'MAX',
    exec_mode:'cluster',
    args:'Iam-the-Argument-of-Express-App-Second-Process',
    env:{
      NODE_ENV:'sit',
      PORT:5000 // Internal Port of the App is 4321 but override it by 5000
    }
  }, ],
};
