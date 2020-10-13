function logic(num=10){
    var val = 100;
    console.log('Some Big Logic is Going On ', num);
    for(let i = 1 ; i<= val * num; i++){
        for(let j = 1; j<=val * num ; j++){

        }
    }
    console.log('Some Big Logic is Going To End ',val * num);
    return val * num;
    }
logic(1000);
module.exports = logic;