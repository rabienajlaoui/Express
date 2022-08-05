const express = require('express')
const app = express()

const date = new Date();
const day = date.getDay()
const hour = date.getHours()
var auth = false

const Middleware = (req,res,next) =>{
    if ((day>0 && day<6) && (hour>8 && hour<17) ) {auth=true}

    // time sould be grater than 08:59:59 , so we use >8 so it start from 09 oclock*

    if (auth){
        next();
    } else  { res.send('We apologize, we are available only from Monday to Friday and from 09h to 17h');
}
}

app.use(Middleware);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Static/home.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/Static/contact.html')
})

app.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/Static/service.html')
})


app.use(express.static(__dirname + '/Static'))

const PORT = 5000;

app.listen(PORT,(err)=> err ? console.log(error) : console.log('server is running on port',PORT))