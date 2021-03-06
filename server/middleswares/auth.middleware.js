const jwt = require('jsonwebtoken');

let secret = process.env.JWT_SECRET;

const verifyToken = (req,res, next)=>{
    let token = req.header.Authorization.split('')[1];
    if(token){
jwt.verify(token,secret,(err,decoded)=>{
    if(!err){
        let email = decoded.Email
        next();
    }else{
        res.status(401).send({message: 'unauthorized'})
    }
})
    }else{
        res.status(401).send({message: 'unauthorized'})
    }
}
module.exports = verifyToken;