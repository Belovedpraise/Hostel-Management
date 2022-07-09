
const mongoose = require('mongoose');
const bcrypt = require(`bcryptjs`)
const userSchema = mongoose.Schema ({
    lastname: String,
    firstname: String,
    username: String,
    email: String,
    password: String,
});

// let saltRound = 10
// userSchema.pre('save', function(next){
// const document = this;
// // document.password = '1234'
// // next()
// bcrypt.hash(document.password,saltRound,(err,hashedPasword)=>{
//     console.log('hashing')
//     if(!err){
//         document.password = hashedPasword;
//         next();
//     }else{
//         console.log(err);
//     }
// })
// })


let saltRound = 10;
userSchema.pre('save', function(next){
    const document = this;
    bcrypt.hash(document.password, saltRound, (err, hashedPassword)=>{
        console.log(`hashing`)
        if(!err){
            document.password = hashedPassword;
            next();
        }else{
            console.log(err)
        }
    })
})

userSchema.methods.validatePassword = function(password, callback){
    const document = this;
    bcrypt.compare(password, document.password, (err, same) => {
        if(!err){
            callback(err, same)
        }else{
            next();
        }
    })
}
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;