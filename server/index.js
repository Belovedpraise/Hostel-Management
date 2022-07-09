const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const  mongoose  = require('mongoose')
const userRouter = require('./routes/user.routes')
require('dotenv').config()

const app = express()
const URI = process.env.MONGO_URI;

mongoose.connect(URI, (err)=>{
    if(err){
        console.log("Error!")
    }else{
        console.log("Connected");
    }
});

mongoose.Promise = global.Promise

app.use(cors());
app.options("*",cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/user',userRouter);

const verifyToken = require('./middleswares/auth.middleware')
app.use('/api',verifyToken,userRouter);

app.get('/', (req, res)=>{
    res.send();
})


app.get('/path', (req, res)=>{
    let user ={email:"phyinpholuwa@gmail.com",password:"1234"}
    res.send(user);
})


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server started and listening port: ${PORT}`);
})