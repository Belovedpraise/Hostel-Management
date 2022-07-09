const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET;

const signUp = (req,response)=>{
    const body = req.body;
    console.log(body);
    userModel.find({email:body.email},(err,res)=>{
        if(!res){
            response.send({success:false,message:`Email already Exists`})
            return;
        }else{
            let form = new userModel(body)
            form.save((err)=>{
                response.send({success:true,message:`user saved successfully`})
            })
        }
    })
}

const signIn = (req, res) => {
    const {Email, password} = req.body;
    userModel.findOne({email: Email}, (err, user)=>{
        if(!err){
            if(user){
                // console.log(user)
                user.validatePassword(password, (err, same)=>{
                    if(err){
                        res.status(500).send({message: "Internal Server Error"})
                    }else if(!same){
                        res.status(401).send({message: "Invalid credentials"})
                    }else{
                        let userData = {email:Email};
                        let secret = process.env.JWT_SECRET;
                        let token = jwt.sign(userData,secret,{expiresIn:"1h"});
                        res.status(200).send({success: true, message: "Sign in successful", token:token, data: user});
                    }
                })
            }
        }else{
            res.status(500).send({message: `Internal Server Error`})
        }
    })
}

const userEnd =(req,res)=>{
    console.log("me")
let token = req.headers.Authorization.split(' ')[1];
jwt.verify(token, secret,(err,decoded)=>{
    let email = decoded.Email;
    userModel.findOne({email},(err,result)=>{
        if(result){
            console.log(result)
            res.send(result);
        }
    })
})
}

module.exports ={signUp,signIn,userEnd}