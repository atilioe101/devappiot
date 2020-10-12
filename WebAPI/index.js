//const { response } = require('express');
var express = require('express');
var app = express();
var PORT = 3001;
var dispositivo_route = require('./routes/dispositivo');
var medicion_route = require('./routes/medicion');

app.use(express.json({ limit: '0.5mb' }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method == 'OPTIONS') res.status(200).send();        
    else next();
});

//routes
app.use(dispositivo_route.endpoint, dispositivo_route);
app.use(medicion_route.endpoint, medicion_route);
//error handling
app.use(function(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).json({err: err.message});
});


app.listen(PORT, function(req, res) {
    console.log("API Ok");
});