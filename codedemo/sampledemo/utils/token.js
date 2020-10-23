const jwt = require('jsonwebtoken');
const tokenOperations = {
    secretKey:'IamtheSecret',
     generate(userid){

        let token =  jwt.sign({userid},this.secretKey);
        console.log('Token is ',token);
        return token; // Store in DB
    },
    verifyToken(token){
        let decoded = jwt.verify(token, this.secretKey);
        if(decoded){
            console.log(decoded.userid);
        }
        else{
            console.log('Invalid Token');
        }
    }

}
let tokenNumber = tokenOperations.generate('Amit');
tokenOperations.verifyToken(tokenNumber);
