module.exports = {
  apps : [{
    name:'My Express App One', // Add Name of the Application
    script: 'app.js', // Name of the starting script file
    instances:"MAX", // How many instance u want
    exec_mode:"cluster", // execution mode is cluster
    watch: '.', // watch the entrire application
    args:'Iam-the-Argument-of-Express-App-One-Process',
    env:{
      NODE_ENV:'dev',
      PORT:3000 // Internal Port of the App is 1234 but override it by 3000
    }
  }],
};
