const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/1'));

app.get('/', (req, res, next)=> {
    console.log(req.url, 'html');
    throw new Error('Broken');
    res.sendFile(__dirname+'/index.html');
});

app.use(express.static(__dirname), (req, res, next)=>{
    console.log(req.url,'css');
    res.sendFile(__dirname +'/style.css');
    next();
});

app.listen(port, ()=>{
    console.log(`working at port ${port}`);}
    ); 