module.exports = {
  apps : [{
    script: 'app.js',
    watch: true,
    name:'PM2 Demo App',
    instances:'MAX',
    max_memory_restart:'1G',
    env:{
      NODE_ENV:'dev'
    }
  }
],


};
