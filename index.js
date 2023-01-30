const fast2sms = require('fast-two-sms');
var express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/index.html")
})


app.post('/sendmessage',(req,res)=>{
    console.log(req.body.message);
    console.log(req.body.number);

    sendMessage(req.body.message,req.body.number,res);
})

function sendMessage(message,number,res){
    var options = {
        authorization: '0aN9iwhejqwH5So8g44BwmvKQ5xJ0jg9mVrJRQp0ZVtVFH58d4KwD1MFxueq',
        message: message,
        numbers: [number]
    };
    
    
    fast2sms.sendMessage(options).then((res)=>{
        res.send("SMS OTP code Sent Successfully!");
    }).catch((error)=>{
        res.send("Some Error Taken Place")
    });
    
}

app.listen(5000),()=>{console.log('App is listening on prot 5000');
}