
const PORTNUM = 8000;
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.static(__dirname+'/public'));


app.get('/',(req, res)=> {
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/about',(req, res)=> {
    res.sendFile(__dirname+'/views/about.html');
});

app.get('/subscribe',(req, res)=> {
    res.sendFile(__dirname+'/views/subscribe.html');
});

app.listen(process.env.PORT || PORTNUM);

